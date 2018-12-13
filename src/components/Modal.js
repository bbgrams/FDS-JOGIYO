import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  static defaultProps = {
    handleClose: () => {},
    show: null,
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

  // 이 방식의 선언이 화살표 함수보다 안전할까?
  // 이제 이것을 통해 장바구니에 정보를 넘겨주자...
  handleAddToCart(id, name, quantity, totalPrice, storeName) {
    alert(`${id}, ${name}, ${quantity}, ${totalPrice}, ${storeName}`);
  }

  render() {
    const { show, id, image, name, price, minAmount, storeName } = this.props;

    const { quantity } = this.state;

    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';

    const totalPrice = price * quantity;
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
            {/* 추가되면 추가되었다는 팝업과 함께 모달이 닫힘 */}
            <button
              onClick={() =>
                this.handleAddToCart(id, name, totalPrice, quantity, storeName)
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
