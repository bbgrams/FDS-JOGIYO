import React, { Component } from 'react';

export default class RestaurantListView extends Component {
  static defaultProps = {
    list: [],
  };

  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map(l => (
          <li className="RestaurantList__item" key={l.id}>
            <img src={l.logoUrl} alt={l.name} className="RestaurantList__img" />
            <h1 className="RestaurantList__name">{l.name}</h1>
            <div className="RestaurantList__info-wrap">
              {l.reviewAvg <= 0 ? (
                <span>첫 리뷰를 남겨주세요 !</span>
              ) : (
                <React.Fragment>
                  <span className="RestaurantList__star">
                    ★{parseFloat(l.reviewAvg).toFixed(1)}
                  </span>
                  <span className="RestaurantList__review">
                    리뷰 {l.reviewCount}
                  </span>
                  <span className="RestaurantList__owner">사장님댓글</span>
                </React.Fragment>
              )}
            </div>
            <div className="RestaurantList__info-wrap">
              <span className="RestaurantList__payment">요기서 결제</span>
              <span className="RestaurantList__min-price">
                {l.minOrderAmount}원 이상 배달
              </span>
            </div>
            <div>
              <span className="RestaurantList__delivery-discount">
                배달할인
              </span>
              <span className="RestaurantList__coupon-discount">추가할인</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
