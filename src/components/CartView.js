import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartView.scss';
export default class CartView extends Component {
  static defaultProps = {
    orderList: [
      {
        // id = foodId
        id: 0,
        name: '',
        quantity: 0,
        storeName: '',
        storeId: 0,
        totalPrice: 0,
        price: 0,
        minAmount: 0,
        ordered: false,
      },
    ],
  };
  constructor(props) {
    super(props);

    const { orderList } = props;
    const foodInCart = orderList.map(o => {
      const { quantity, id, name, storeName, storeId, ordered, price } = o;

      return {
        id,
        name,
        quantity,
        storeName,
        price,
        storeId,
        ordered,
      };
    });

    this.state = {
      // quantity: 1,
      // totalPrice: 0,
      // checkOutPrice: 0,
      foodInCart,

      //   orderListArray: [
      //     {
      //       // id = foodId
      //       id: 0,
      //       name: '',
      //       quantity: 0,
      //       storeName: '',
      //       storeId: 0,
      //       totalPrice: 0,
      //       price: 0,
      //       minAmount: 0,
      //     },
      //   ],
    };
  }
  handleQuantityChange(id, quantity) {
    const { foodInCart } = this.state;
    const newFoodInCart = foodInCart.map(f => {
      if (f.id === id) {
        f.quantity = quantity;
      }
      return f;
    });
    this.setState({
      foodInCart: newFoodInCart,
    });
    console.log(newFoodInCart);
    console.log(this.state.foodInCart);
  }

  renderItem(productInCart) {
    const {
      id,
      name,
      quantity,
      storeName,
      storeId,
      totalPrice,
      price,
      minAmount,
    } = productInCart;
    return (
      <div key={id}>
        <div>{storeName}</div>
        <div>{name}</div>
        <div>{price * quantity}</div>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={e =>
            this.handleQuantityChange(parseInt(id), parseInt(e.target.value))
          }
        />
        <button>삭제</button>
      </div>
    );
  }

  // handleDelete... foodkey가 맞으면, 그건 없애버리기..
  render() {
    const { orderList } = this.props;
    const { foodInCart } = this.state;
    console.log(this.props.orderList);
    console.log(this.state.foodInCart);

    return (
      <div className="Cart">
        <div className="Cart__subTitle">
          <span>주문표</span>
          {/* <Link to='#'></Link> */}

          <span className="Cart__subTitle__icon" />
        </div>
        {/* -------------------------------- */}
        <div className="Cart__title">
          <div>
            {foodInCart.map(f => this.renderItem(f))}

            <button>
              {/* 누르면 매장으로 */}
              메뉴추가
            </button>
            <button>
              {/* 주문 창으로 */}
              {/* 세션에 마지막으로 수정된 사항을 저장하기  */}
              주문하기
            </button>
          </div>
          {/* 배열 안의 첫번째 객체이기 때문에...[0] */}
        </div>
      </div>
    );
  }
}
