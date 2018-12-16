import React, { Component } from 'react';
import Modal from '../components/Modal';

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

sessionStorage.setItem('cart', JSON.stringify(cart));
export default class ModalContainer extends Component {
  // menuview에서 받을 prop들
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
      cart: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.checkFoodId = this.checkFoodId.bind(this);

    this.checkRestaurantId = this.checkRestaurantId.bind(this);
  }

  // async componentDidMount() {
  //   console.log(this.state.cart);
  //   this.setState({
  //     cart: JSON.parse(sessionStorage.cart),
  //   });

  // }

  handleAddToCart(id, name, quantity, storeName, storeId, totalPrice, price) {
    alert(
      `${id}, ${name}, ${quantity}, ${storeName},${storeId}, ${totalPrice}, ${price}`
    );

    const selectedItem = {
      id,
      name,
      totalPrice,
      quantity,
      storeId,
      storeName,
      ordered: false,
    };

    let cartItem = this.state.cart;
    let foodId = id;

    // 만약 음식점이 바뀌면 스토라지를 초기화 하고 음식을 담는다.
    if (
      JSON.parse(sessionStorage.getItem('cart')).length > 0 &&
      !this.checkRestaurantId(storeId)
    ) {
      alert('다른 음식점 선택 시, 장바구니가 초기화 됩니다.');

      sessionStorage.clear();
      this.setState({
        cart: [],
      });
    }

    // 음식 담기...
    if (this.checkFoodId(foodId)) {
      let foodIndex = cartItem.findIndex(i => {
        return i.id === foodId;
      });

      cartItem[foodIndex].quantity += quantity;
      cartItem[foodIndex].totalPrice = cartItem[foodIndex].quantity * price;

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
  checkFoodId(foodId) {
    let cart = this.state.cart;
    return cart.some(i => {
      return i.id === foodId;
    });
  }

  checkRestaurantId(storeId) {
    let cart = this.state.cart;
    return cart.some(i => {
      return i.storeId === storeId;
    });
  }

  render() {
    console.log(this.state.cart);

    return <Modal addToCart={this.handleAddToCart} {...this.props} />;
  }
}
