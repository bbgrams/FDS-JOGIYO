import React, { Component } from 'react';
import './StoreDetailView.scss';

import Menu from '../containers/Menu';

import UserReview from '../containers/UserReview';
import StoreInfo from '../containers/StoreInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
export default class StoreDetailView extends Component {
  static defaultProps = {
    id: null,
    name: '',
    minOrderAmount: 0,
    reviewAvg: 0,
    logoUrl: '',
    reviewCount: 0,
    begin: '',
    end: '',
    companyName: '',
    companyNumber: '',
    countryOrigin: '',
    introductionText: '',
    estimatedDeliveryTime: '',
    exceptCash: null,
    paymentMethods: [],
    deliveryFee: 0,
  };

  constructor(props) {
    super(props);

    // 현재 선택된 페이지
    // page === 'menu' -> 메뉴 정보 페이지
    // page === 'user-review' -> 사용자 리뷰 페이지
    // page === 'store-info' -> 음식점 정보 페이지
    this.state = { selected: 'menu', infoShow: false };
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
  // 물음표 클릭 시 배달시간에 대한 안내 문구 출력
  handleInfoClick() {
    this.setState(prevState => ({
      infoShow: !prevState.infoShow,
    }));
  }
  render() {
    const { infoShow } = this.state;
    const {
      name,
      minOrderAmount,
      reviewAvg,
      reviewCount,
      logoUrl,
      id,
      begin,
      end,
      companyName,
      companyNumber,
      countryOrigin,
      introductionText,
      estimatedDeliveryTime,
      exceptCash,
      paymentMethods,
      deliveryFee,
      additionalDiscountPerMenu,
    } = this.props;

    return (
      <div className="StoreDetailContainer">
        <div className="StoreDetail">
          <h1 className="StoreDetail__name">{name}</h1>
          <div className="StoreDetail__info clearfix">
            {/* 로고 이미지 설정 참고 */}
            {/* 이미지를 왼쪽에 위치시키고 나머지는 디스플레이 : 블록 으로? */}
            <div className="StoreDetail__info__logo">
              <img src={logoUrl} alt={name} />
            </div>
            <div className="StoreDetail__info__text">
              <p>평점: {reviewAvg}</p>
              <p>
                최소주문금액 <span>{minOrderAmount}원</span>
              </p>
              <p>
                결제 <span>{exceptCash ? '현금' : null}, </span>
                <span>
                  {paymentMethods.map(m => (
                    <span className="StoreDetail__info__text__yogi" key={m.id}>
                      {m.name === 'creditcard'
                        ? '신용카드'
                        : 'online'
                        ? '요기서결제'
                        : null}
                    </span>
                  ))}
                </span>
              </p>
              <p>
                배달시간 <span>{estimatedDeliveryTime}</span>{' '}
                <p className="StoreDetail__info__text__btn">
                  <button onClick={() => this.handleInfoClick()}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </button>
                  {infoShow ? (
                    <p className="StoreDetail__info__text__btn__text">
                      최근 주문의 배달시간을 분석한 정보 입니다. 실제
                      배달시간과는 차이가 있을 수 있습니다.
                    </p>
                  ) : null}
                </p>
              </p>
              <p>
                <span className="StoreDetail__info__text__delivery_discount">
                  {' '}
                  배달할인 {additionalDiscountPerMenu}원
                </span>
              </p>
            </div>
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
                <StoreInfo
                  storeId={id}
                  begin={begin}
                  end={end}
                  companyName={companyName}
                  companyNumber={companyNumber}
                  countryOrigin={countryOrigin}
                  introductionText={introductionText}
                  estimatedDeliveryTime={estimatedDeliveryTime}
                  deliveryFee={deliveryFee}
                  paymentMethods={paymentMethods}
                  exceptCash={exceptCash}
                  minOrderAmount={minOrderAmount}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
