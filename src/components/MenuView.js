import React, { Component } from 'react';
import './MenuView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// <i class="fas fa-angle-down"></i>
export default class MenuView extends Component {
  static defaultProps = {
    food: [],
  };
  render() {
    const { food, rest } = this.props;
    return (
      <React.Fragment>
        <div className="MenuContent">
          <div className="PhotoMenu">
            {food.map(m => (
              <div className="PhotoMenu__content" key={m.id}>
                <img
                  className="PhotoMenu__content__img"
                  src={m.image}
                  alt="{m.name}"
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
              <div className="RestOfMenu__menu" key={item.id}>
                <span className="RestOfMenu__menu__name">{item.name}</span>
                <span className="RestOfMenu__menu__down">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
