import React, { Component } from 'react';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  handleQuantityPlus() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  }
  handleQuantityMinus() {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1,
    }));
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
    console.log(this.props);

    const { quantity } = this.state;

    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';

    let totalPrice = price * quantity;
    // faPlus

    return (
      <div className={showHideClassName}>
        {/* <div className="show"> */}
        <div className="Modal__main">
          <div className="Madal__order">
            <h1 className="Madal__order__title">계란짐{name}</h1>
            <div
              className="Madal__order__img"
              style={{ backgroundImage: 'url(' + image + ')' }}
            >
              {name}
            </div>
            <div className="Madal__order__price">
              <span className="Madal__order__price__title">가격</span>
              <span className="Madal__order__price__num">{price}원</span>
            </div>

            <div className="Madal__order__quantity">
              <span className="Madal__order__quantity__title">수량</span>
              <div className="Madal__order__quantity__btn">
                <button
                  onClick={() => this.handleQuantityMinus()}
                  className="Madal__order__quantity__btn__minus"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="Madal__order__quantity__btn__num">
                  {quantity}
                </span>
                <button
                  onClick={() => this.handleQuantityPlus()}
                  className="Madal__order__quantity__btn__plus"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="Madal__order__total_price">
              <span className="Madal__order__total_price__title">
                총 주문금액
              </span>
              <span className="Madal__order__total_price__num">
                {totalPrice.toLocaleString()}원
              </span>
            </div>
            <div className="Madal__order__min">
              최소주문금액: {minAmount.toLocaleString()}원
            </div>
            <div className="Madal__order__btn">
              <button
                onClick={() =>
                  this.props.addToCart(
                    id,
                    name,
                    quantity,
                    storeName,
                    storeId,
                    totalPrice,
                    price
                  )
                }
              >
                주문표에 추가
              </button>
              <button>주문하기</button>
            </div>
          </div>
          <button
            onClick={() => this.handleModalClose()}
            className="Madal__order__close"
          >
            <FontAwesomeIcon icon={faTimes} />
            닫기
          </button>
        </div>
      </div>
    );
  }
}
