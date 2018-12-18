import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './StoreListView.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default class StoreListView extends Component {
  static defaultProps = { storeList: [] };
  constructor(props) {
    super(props);

    this.state = { show: false };
  }
  render() {
    const { storeList, category, categoryId, handleClick } = this.props;
    const { show } = this.state;
    console.log(category);

    if (!(storeList && category && categoryId)) {
      return null;
    }
    return (
      <div className="StoreList">
        <div className="StoreList__category-sort-wrap">
          <div className="StoreList__category">
            <button
              className="StoreList__category-btn"
              onClick={e =>
                this.setState(prevState => ({
                  show: !prevState.show,
                }))
              }
            >
              {category.find(item => item.id === parseInt(categoryId)).name ||
                '음식점 전체 보기'}
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
            {show && (
              <ul className="StoreList__category-item">
                <li key="all">
                  <Link to="/category">
                    <FontAwesomeIcon icon={faUtensils} />
                    음식점 전체보기
                  </Link>
                </li>
                {category.map(c => (
                  <li key={c.id}>
                    <Link to={`/category/${c.id}`}>
                      <FontAwesomeIcon icon={faUtensils} /> {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="StoreList__sort">
            <select name="" id="" className="StoreList__sort__select">
              <option value="">기본 정렬순</option>
              <option value="">별점순</option>
              <option value="">리뷰 많은순</option>
              <option value="">최소 주문 금액순</option>
            </select>
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
