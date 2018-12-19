import React, { Component } from 'react';
import './Modal.scss';

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
    deliveryFee: 0,

    cart: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      totalPrice: 0,
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
      deliveryFee,
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
                this.props.addToCart(
                  id,
                  name,
                  quantity,
                  storeName,
                  storeId,
                  totalPrice,
                  price,
                  minAmount,
                  deliveryFee
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
