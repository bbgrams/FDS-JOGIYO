import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartView.scss';
export default class CartView extends Component {
  static defaultProps = {
    orderList: [],
  };
  constructor(props) {
    super(props);

    // CC의 상태를 공유한다고 보면 된다.
    const { orderList } = props;
    const foodInCart = orderList.map(o => {
      const {
        quantity,
        id,
        name,
        storeName,
        storeId,
        ordered,
        price,
        deliveryFee,
        minAmount,
      } = o;

      return {
        id,
        name,
        quantity,
        storeName,
        price,
        storeId,
        ordered,
        deliveryFee,
        totalPrice: quantity * price,
        minAmount,
      };
    });

    this.state = {
      foodInCart,
    };
  }

  handleQuantityPlus(id, price) {
    const { foodInCart } = this.state;
    const newFoodInCart = foodInCart.map(f => {
      if (f.id === id) {
        f.quantity++;

        f.totalPrice = f.quantity * price;
      }
      return f;
    });
    this.setState({ foodInCart: newFoodInCart });
  }
  handleQuantityMinus(id, price) {
    const { foodInCart } = this.state;
    const newFoodInCart = foodInCart.map(f => {
      if (f.id === id && f.quantity > 1) {
        f.quantity--;

        f.totalPrice = f.quantity * price;
      }
      return f;
    });
    this.setState({ foodInCart: newFoodInCart });
  }

  renderItem(productInCart) {
    let {
      id,
      name,
      quantity,
      storeName,
      storeId,
      totalPrice,
      price,
      deliveryFee,
      minAmount,
    } = productInCart;

    return (
      <div key={id}>
        <div>{name}</div>

        <div>{price * quantity}</div>
        <button
          onClick={e => this.handleQuantityPlus(parseInt(id), parseInt(price))}
        >
          +
        </button>
        <div>수량 : {quantity}</div>
        <button
          onClick={e => this.handleQuantityMinus(parseInt(id), parseInt(price))}
        >
          -
        </button>

        {/* key로 준 id값을 온클릭 할 때의 매개변수 */}
        <button onClick={() => this.props.handleDelete(id)}>삭제</button>
      </div>
    );
  }

  // handleDelete... foodkey가 맞으면, 그건 없애버리기..
  render() {
    const { foodInCart } = this.state;
    let cartLength = foodInCart.length;
    // console.log(this.props.orderList);
    console.log(foodInCart);
    return (
      <div className="Cart">
        <div className="Cart__subTitle">
          <div>주문표</div>
          {cartLength > 0 ? (
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
          {cartLength > 0 ? (
            <div key={foodInCart.id}>
              {foodInCart.map(f => this.renderItem(f))}
            </div>
          ) : (
            <p>주문표에 담긴 메뉴가 없습니다.</p>
          )}
        </div>
        {/* foodInCart[0] -> 이렇게 표시한 이유는 그냥 첫번째 배열의 배달값만 가져오면 되기 때문  */}
        {cartLength > 0 ? (
          <div>배달료: {foodInCart[0].deliveryFee}원</div>
        ) : null}
        {cartLength > 0 ? (
          <div>최소주문가격: {foodInCart[0].minAmount}</div>
        ) : null}
        {cartLength > 0 ? (
          <div>
            총가격:
            {foodInCart.reduce((acc, item) => acc + item.totalPrice, 0)}
          </div>
        ) : null}
        {/* 배열의 길이가 0이면 홈으로 버튼 */}
        {/* 누르면 매장으로 */}
        {cartLength > 0 ? (
          <Link to={`/store/${foodInCart[0].storeId}`}>
            <button
              onClick={() => {
                this.props.handleAddMenu();
              }}
            >
              메뉴 추가하기
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button>홈으로 가기</button>
          </Link>
        )}

        {/* 주문 창으로 */}
        {/* 배열의 길이가 0이면 기능이 작동 안됨. */}
        {/* 세션에 마지막으로 수정된 사항을 저장하기  */}
        {cartLength > 0 &&
        foodInCart.reduce((acc, item) => acc + item.totalPrice, 0) >
          foodInCart[0].minAmount ? (
          <Link to="/pay">
            <button onClick={() => this.props.handleToPay()}>주문하기</button>
          </Link>
        ) : (
          <button disabled>주문하기</button>
        )}
      </div>
    );
  }
}
