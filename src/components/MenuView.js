import React, { Component } from 'react';

import './MenuView.scss';

import Collapse from './Collapse';

export default class MenuView extends Component {
  static defaultProps = {
    food: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      currentOptionId: '',
    };
  }

  render() {
    const { food, rest } = this.props;

    return (
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
        {/* ------------ */}

        <div className="RestOfMenu">
          {rest.map(item => (
            <Collapse key={item.id} name={item.name}>
              {/* 이제 여기에 더 상세한 메뉴가 와야 한다... */}
              {/* rest.food(array) */}
              {/* id, image(112,80), name(333, bold,1.1), price */}
              <div className="RestOfMenu__list">
                {item.food.map(f => (
                  <div className="RestOfMenu__list__item" key={f.id}>
                    <span className="RestOfMenu__list__item__name">
                      {f.name}
                    </span>
                    <span className="RestOfMenu__list__item__price">
                      {f.price}
                    </span>
                    <img src={f.image} alt={f.name} />
                  </div>
                ))}
              </div>
            </Collapse>
          ))}
        </div>
      </div>
    );
  }
}
