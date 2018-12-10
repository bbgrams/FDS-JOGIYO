import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StoreListView.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default class StoreListView extends Component {
  static defaultProps = {
    storeList: [],
  };

  render() {
    const { storeList, category } = this.props;
    return (
      <div className="StoreList">
        <div className="StoreList__category-sort-wrap">
          <div className="StoreList__category">
            <button className="StoreList__category-btn">
              음식점 전체보기
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
            <ul className="StoreList__category-item">
              {category.map(c => (
                <li key={c.id}>
                  <FontAwesomeIcon icon={faUtensils} /> {c.name}
                </li>
              ))}
              {/* <li>
                <FontAwesomeIcon icon={faUtensils} /> 음식점 전체보기
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 1인분 주문
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 프랜차이즈
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 치킨
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 피자/양식
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 중국집
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 한식
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 일식/돈까스
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 족발/보쌈
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 야식
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 분식
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} /> 카페/디저트
              </li> */}
            </ul>
          </div>
        </div>
        <h2 className="StoreList__store">요기요 등록 음식점</h2>
        <p className="StoreList__store-count">
          음식점 <strong>{storeList.length}곳</strong>을 찾았습니다.
        </p>
        <ul>
          {storeList.map(l => (
            <li className="StoreList__item" key={l.id}>
              <Link to={`/store/${l.id}`}>
                <div className="StoreList__img">
                  <img src={l.logoUrl} alt={l.name} />
                </div>
                <h1 className="StoreList__name">{l.name}</h1>
                <div className="StoreList__info-wrap">
                  {l.reviewAvg <= 0 ? (
                    <span>첫 리뷰를 남겨주세요 !</span>
                  ) : (
                    <React.Fragment>
                      <span className="StoreList__star">
                        ★ {parseFloat(l.reviewAvg).toFixed(1)}
                      </span>
                      <span className="StoreList__review">
                        리뷰 {l.reviewCount}
                      </span>
                    </React.Fragment>
                  )}
                </div>
                <div className="StoreList__info-wrap">
                  <span className="StoreList__payment">요기서 결제</span>
                  <span className="StoreList__min-price">
                    {l.minOrderAmount}원 이상 배달
                  </span>
                </div>
                <div className="StoreList__delivery-time">
                  {l.estimatedDeliveryTime}
                </div>
                {/* <div>
                <span className="StoreList__delivery-discount">배달할인</span>
                <span className="StoreList__coupon-discount">추가할인</span>
              </div> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
