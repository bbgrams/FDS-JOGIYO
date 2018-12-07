import React, { Component } from 'react';
import './StoreDetailView.scss';

import Menu from '../containers/Menu';

import UserReview from '../containers/UserReview';
import StoreInfo from '../containers/StoreInfo';
export default class StoreDetailView extends Component {
  static defaultProps = {
    id: null,
    name: '',
    minOrderAmount: '',
    reviewAvg: 0,
    logoUrl: '',
    reviewCount: 0,
  };

  constructor(props) {
    super(props);

    // 현재 선택된 페이지
    // page === 'menu' -> 메뉴 정보 페이지
    // page === 'user-review' -> 사용자 리뷰 페이지
    // page === 'store-info' -> 음식점 정보 페이지
    this.state = {
      selected: 'menu',
    };
  }

  handleMenuPage() {
    this.setState({
      selected: 'menu',
    });
  }
  handleUserReviewPage() {
    this.setState({
      selected: 'user-review',
    });
  }
  handleStoreInfoPage() {
    this.setState({
      selected: 'store-info',
    });
  }

  render() {
    const {
      name,
      minOrderAmount,
      reviewAvg,
      reviewCount,
      logoUrl,
      id,
    } = this.props;

    return (
      <div className="StoreDetailContainer">
        <div className="StoreDetail">
          <h1 className="StoreDetail__name">{name}</h1>
          <div className="StoreDetail__info">
            {/* 로고 이미지 설정 참고 */}
            {/* 이미지를 왼쪽에 위치시키고 나머지는 디스플레이 : 블록 으로? */}
            <img className="StoreDetail__info__logo" src={logoUrl} alt={name} />

            <div>최소주문금액 {minOrderAmount}</div>
            <div>평점: {reviewAvg}</div>
          </div>
        </div>
        {/* 3개 메뉴 셀렉트 */}
        {/* 원산지 정보는 어디다 넣어야 할까...? */}
        <div className="StoreDetail__menu">
          <div className="StoreDetail__menu__select">
            <button onClick={() => this.handleMenuPage()}>메뉴</button>
            <button onClick={() => this.handleUserReviewPage()}>
              클린리뷰 {reviewCount}
            </button>
            <button onClick={() => this.handleStoreInfoPage()}>정보</button>
          </div>
          {/* 컨텐츠 내용 양의 따라 늘어나야 한다 */}
          <div className="StoreDetail__menu__box">
            <div>
              {this.state.selected === 'menu' ? (
                <Menu storeId={id} />
              ) : this.state.selected === 'user-review' ? (
                <UserReview storeId={id} />
              ) : this.state.selected === 'store-info' ? (
                <StoreInfo storeId={id} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
