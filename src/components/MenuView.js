import React, { Component } from 'react';

import './MenuView.scss';

import Collapse from './Collapse';

export default class MenuView extends Component {
  static defaultProps = { food: [] };

  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    const { food, rest } = this.props;

    return (
      <React.Fragment>
        <div className="MenuContent">
          <div className="PhotoMenu">
            {food.map(m => (
              <div
                className="PhotoMenu__content"
                key={m.id}
                onClick={this.showModal}
              >
                <img
                  className="PhotoMenu__content__img"
                  src={m.image}
                  alt={m.name}
                />
                <div className="PhotoMenu__content__name">{m.name}</div>
                <div className="PhotoMenu__content__price">
                  {m.price.toLocaleString()} 원
                </div>
              </div>
            ))}
          </div>

          <div className="RestOfMenu">
            {rest.map(item => (
              <Collapse key={item.id} name={item.name}>
                <div className="RestOfMenu__list">
                  {item.food.map(f => (
                    <div
                      className="RestOfMenu__list__item"
                      key={f.id}
                      onClick={this.showModal}
                    >
                      <div className="RestOfMenu__list__item__text">
                        <p className="RestOfMenu__list__item__text__name">
                          {f.name}
                        </p>
                        <p className="RestOfMenu__list__item__text__price">
                          {f.price.toLocaleString()} 원
                        </p>
                      </div>
                      <img src={f.image} alt={f.name} />
                    </div>
                  ))}
                </div>
              </Collapse>
            ))}
          </div>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal} />
      </React.Fragment>
    );
  }
}

// Modal 함수형 컴포넌트
const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          컨텐츠가 들어올 자리입니다.
          <p>이름</p>
          <p>가격</p>
          <p>수량</p>
        </div>
        <button onClick={handleClose}>CLOSE</button>
      </section>
    </div>
  );
};
