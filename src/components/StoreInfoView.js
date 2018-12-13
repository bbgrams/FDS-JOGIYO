import React, { Component } from 'react';

export default class StoreInfoView extends Component {
  static defaultProps = {
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
    minOrderAmount: 0,
  };

  render() {
    const {
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
      minOrderAmount,
    } = this.props;
    return (
      <div className="StoreInfoView">
        <div className="StoreInfoView__hour">
          <p>업체정보</p>
          <p>
            <span>영업시간</span>
            <span>
              {begin.substring(0, begin.length - 3)} -
              {end.substring(0, end.length - 3)}
            </span>
          </p>
        </div>

        <div className="StoreInfoView__payment">
          <p className="StoreInfoView__payment__title">결제정보</p>
          <p>
            <span>최소주문금액</span>
            <span>{minOrderAmount}</span>
          </p>
          <p>
            <span>결제수단</span>
            <span>{exceptCash ? '현금' : null}, </span>
            <span>
              {paymentMethods.map(m => (
                <span key={m.id}>
                  {m.name === 'creditcard'
                    ? '신용카드'
                    : 'online'
                    ? '요기서결제, '
                    : null}{' '}
                </span>
              ))}
            </span>
          </p>
        </div>
        <div className="StoreInfoView__info">
          <p>
            상호명 <span>{companyName}</span>
          </p>
          <p>
            사업자등록번호 <span>{companyNumber}</span>
          </p>
        </div>
        <div className="StoreInfoView__origin">
          <p>원산지 정보</p>
          <p>{countryOrigin}</p>
        </div>
      </div>
    );
  }
}
