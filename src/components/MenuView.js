import React, { Component } from 'react';

<<<<<<< HEAD
import './MenuView.scss';

import Collapse from './Collapse';

export default class MenuView extends Component {
  static defaultProps = {
    food: [],
  };

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
                alt={m.name}
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
              <div className="RestOfMenu__list">
                {item.food.map(f => (
                  <div className="RestOfMenu__list__item" key={f.id}>
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
=======
export default class MenuView extends Component {
  render() {
    return (
      <div>
        가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
        가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
        가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
        가나다라마바사 가나다라마바사
>>>>>>> 상점 상세 정보 페이지 구현 중: StoreDetailView 수정, MenuPage, UserReviewPage, StoreInfoPage 와 관련된 cc, pc 생성 및 적용
      </div>
    );
  }
}
