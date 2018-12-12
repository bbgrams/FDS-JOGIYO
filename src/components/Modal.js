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
  handleQuantityReset() {
    this.props.handleClose();
    this.setState({
      quantity: 1,
    });
  }

  render() {
    const { show, id, image, name, price } = this.props;

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
            <p>가격: {totalPrice.toLocaleString()}</p>
            <span>수량</span>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={e => this.handleQuantityChange(e)}
            />
            {/* 추가되면 추가되었다는 팝업과 함께 모달이 닫힘 */}
            <button>주문표에 추가</button>
            <button>주문하기</button>
          </div>
          <button onClick={() => this.handleQuantityReset()}>닫기</button>
        </div>
      </div>
    );
  }
}
