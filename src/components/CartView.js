import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartView.scss';
export default class CartView extends Component {
  static defaultProps = {
    orderList: [],
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
      foodInCart,
      totalAmount: [],
    };
    this.handlePriceChange.bind(this);
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
  handlePriceChange(e) {
    this.state.totalAmount.push(parseInt(e.target.value));
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
        {/* key로 준 id값을 온클릭 할 때의 매개변수 */}
        <button onClick={() => this.props.handleDelete(id)}>삭제</button>
        <div>총 가격: </div>
      </div>
    );
  }

  // handleDelete... foodkey가 맞으면, 그건 없애버리기..
  render() {
    const { foodInCart } = this.state;
    // console.log(this.props.orderList);

    return (
      <div className="Cart">
        <div className="Cart__subTitle">
          <span>주문표</span>
          {foodInCart.length > 0 ? (
            <button onClick={() => this.props.handleDeleteAll()}>
              모두삭제
            </button>
          ) : null}
          {/* <Link to='#'></Link> */}
          {/* 아이콘은 foodInCart의 length가 0이면 없고 0보다 크면 나타난다 */}
          <span className="Cart__subTitle__icon" />
        </div>
        {/* -------------------------------- */}
        <div className="Cart__title">
          {/*  */}
          {foodInCart.length > 0 ? (
            <div key={foodInCart.id}>
              {foodInCart.map(f => this.renderItem(f))}

              <button>
                {/* 배열의 길이가 0이면 홈으로 버튼 */}
                {/* 누르면 매장으로 */}
                메뉴추가
              </button>
              <button>
                {/* 주문 창으로 */}
                {/* 배열의 길이가 0이면 기능이 작동 안됨. */}
                {/* 세션에 마지막으로 수정된 사항을 저장하기  */}
                주문하기
              </button>
            </div>
          ) : (
            <p>no order</p>
          )}
        </div>
      </div>
    );
  }
}
