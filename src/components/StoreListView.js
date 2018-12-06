import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StoreListView extends Component {
  static defaultProps = {
    storeList: [],
  };

  render() {
    const { storeList } = this.props;
    return (
      <ul>
        {storeList.map(l => (
          <li className="StoreList__item" key={l.id}>
            <Link to={`/store/${l.id}`}>
              <img src={l.logoUrl} alt={l.name} className="StoreList__img" />
              <h1 className="StoreList__name">{l.name}</h1>
              <div className="StoreList__info-wrap">
                {l.reviewAvg <= 0 ? (
                  <span>첫 리뷰를 남겨주세요 !</span>
                ) : (
                  <React.Fragment>
                    <span className="StoreList__star">
                      ★{parseFloat(l.reviewAvg).toFixed(1)}
                    </span>
                    <span className="StoreList__review">
                      리뷰 {l.reviewCount}
                    </span>
                    <span className="StoreList__owner">사장님댓글</span>
                  </React.Fragment>
                )}
              </div>
              <div className="StoreList__info-wrap">
                <span className="StoreList__payment">요기서 결제</span>
                <span className="StoreList__min-price">
                  {l.minOrderAmount}원 이상 배달
                </span>
              </div>
              <div>
                <span className="StoreList__delivery-discount">배달할인</span>
                <span className="StoreList__coupon-discount">추가할인</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
