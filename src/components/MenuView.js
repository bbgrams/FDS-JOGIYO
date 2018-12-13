import React, { Component } from 'react';

import './MenuView.scss';

import Collapse from './Collapse';
import Modal from './Modal';

export default class MenuView extends Component {
  static defaultProps = {
    food: [],
    info: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      foodId: 0,
      foodImage: '',
      foodName: '',
      foodPrice: 0,
    };
  }

  handleShowModal = () => {
    this.setState({
      show: true,
    });
  };

  handleHideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { food, rest, info } = this.props;

    return (
      <React.Fragment>
        <div className="MenuContent">
          <div className="PhotoMenu">
            {food.map(f => (
              <div
                className="PhotoMenu__content"
                key={f.id}
                onClick={() => {
                  this.setState({
                    foodId: f.id,
                    foodImage: f.image,
                    foodName: f.name,
                    foodPrice: f.price,
                  });
                  this.handleShowModal();
                }}
              >
                <img
                  className="PhotoMenu__content__img"
                  src={f.image}
                  alt={f.name}
                />
                <div className="PhotoMenu__content__name">{f.name}</div>
                <div className="PhotoMenu__content__price">
                  {f.price.toLocaleString()} 원
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
                      onClick={() => {
                        this.setState({
                          foodId: f.id,
                          foodImage: f.image,
                          foodName: f.name,
                          foodPrice: f.price,
                        });
                        this.handleShowModal();
                      }}
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

        <Modal
          show={this.state.show}
          handleClose={this.handleHideModal}
          id={this.state.foodId}
          image={this.state.foodImage}
          name={this.state.foodName}
          price={this.state.foodPrice}
          minAmount={info.minOrderAmount}
          storeName={info.name}
        />
      </React.Fragment>
    );
  }
}
