import React, { Component } from 'react';
import './Modal.scss';
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

sessionStorage.setItem('cart', JSON.stringify(cart));
console.log(JSON.parse(sessionStorage.getItem('cart')).length);

export default class Modal extends Component {
  static defaultProps = {
    show: null,
    storeId: 0,
    id: 0,
    image: '',
    name: '',
    price: 0,
    minAmount: 0,
    storeName: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      totalPrice: 0,
      cart: [],
    };
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  handleModalClose() {
    this.props.handleClose();
    this.setState({
      quantity: 1,
    });
  }

  handleAddToCart(id, name, quantity, storeName, storeId, totalPrice) {
    alert(`${id}, ${name}, ${quantity}, ${storeName},${storeId}`);

    const selectedItem = {
      id,
      name,
      totalPrice,
      quantity,
      storeId,
      storeName,
    };

    let cartItem = this.state.cart;
    let foodId = id;
    // let empty = sessionStorage.getItem('cart')
    // 만약 음식점이 바뀌면 스토라지를 초기화 하고 음식을 담는다.
    if (
      JSON.parse(sessionStorage.getItem('cart')).length > 0 &&
      !this.checkRestaurantId(storeId)
    ) {
      alert('다른 음식점 선택 시, 장바구니가 초기화 됩니다.');
      this.setState({ cart: [] });
      sessionStorage.clear();
    }

    // 음식 담기...
    if (this.checkFood(foodId) && this.checkPrice(totalPrice)) {
      let foodIndex = cartItem.findIndex(i => {
        return i.id === foodId;
      });
      let priceIndex = cartItem.findIndex(p => {
        return p.totalPrice === totalPrice;
      });
      cartItem[foodIndex].quantity += quantity;
      cartItem[priceIndex].totalPrice += totalPrice;
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedItem);
      this.setState({
        cart: cartItem,
      });
    }
    sessionStorage.setItem('cart', JSON.stringify(this.state.cart));

    console.log(this.state.cart);
  }
  // 장바구니에 이미 중복된 것들이 있는지 확인하는 함수들
  checkFood(foodId) {
    let cart = this.state.cart;
    return cart.some(i => {
      return i.id === foodId;
    });
  }
  checkPrice(totalPrice) {
    let cart = this.state.cart;
    return cart.some(p => {
      return p.totalPrice === totalPrice;
    });
  }
  checkRestaurantId(storeId) {
    let cart = this.state.cart;
    return cart.some(i => {
      return i.storeId === storeId;
    });
  }

  render() {
    const {
      show,
      id,
      image,
      name,
      price,
      minAmount,
      storeName,
      storeId,
    } = this.props;

    const { quantity } = this.state;

    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';

    let totalPrice = price * quantity;
    return (
      <div className={showHideClassName}>
        <div className="Modal__main">
          <div>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>가격: {totalPrice.toLocaleString()}원</p>
            <p>최소주문금액: {minAmount.toLocaleString()}원</p>
            <span>수량</span>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={e => this.handleQuantityChange(e)}
            />

            <button
              onClick={() =>
                this.handleAddToCart(
                  id,
                  name,
                  quantity,
                  storeName,
                  storeId,
                  totalPrice
                )
              }
            >
              추가
            </button>
            <button>주문하기</button>
          </div>
          <button onClick={() => this.handleModalClose()}>닫기</button>
        </div>
      </div>
    );
  }
}
