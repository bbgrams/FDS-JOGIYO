import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartView.scss';
export default class CartView extends Component {
  render() {
    console.log(this.props.orderList);
    return (
      <div className="CartWrap">
        <div className="CartWrap__subTitle">
          <span>주문표</span>
          {/* <Link to='#'></Link> */}
          <span className="CartWrap__subTitle__icon" />
        </div>
        <div className="CartWrap__cart" />
        <div className="CartWrap__restaurant-name">
          <Link className="restaurant-name" to="#" />
          <Link className="CartWrap__ng-binding" to="#" />
          <div>
            <span className="CartWrap__coupon__delivery">배달할인 3,000원</span>
            <span className="CartWrap__coupon__coupon-style">추가할인 0%</span>
          </div>
        </div>
        <ul className="CartWrap__list-group">
          <li className="CartWrap__list-group-item clearfix ng-scope">
            <div className="CartWrap__row">
              <div className="CartWrap__menu-name ng-binding">
                스노우볼 오리지널 크러스트 L
                <div>
                  <div className="CartWrap__col-xs-6 pull-left">
                    <Link className="CartWrap__btn btn-del-menu" to="#" />
                    <span className="CartWrap__order-price ng-binding" />
                  </div>
                  <div className="CartWrap__col-xs-6 text-right">
                    <Link className="CartWrap__btn btn-minus" to="#">
                      감소
                    </Link>
                    <span className="CartWrap__order-num ng-binding">1</span>
                    <Link className="CartWrap__btn btn-plus" to="#">
                      증가
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="CartWrap__list-group-item clearfix ng-scope">
            <div className="CartWrap__row">
              <div className="CartWrap__menu-name ng-binding">
                갈릭 페퍼 스테이크 오리지널 크러스트 L
                <div>
                  <div className="CartWrap__col-xs-6 pull-left">
                    <Link className="CartWrap__btn btn-del-menu" to="#">
                      삭제
                    </Link>
                    <span className="CartWrap__order-price ng-binding">
                      29,500원
                    </span>
                  </div>
                  <div className="CartWrap__col-xs-6 text-right">
                    <Link className="CartWrap__btn btn-minus" to="#">
                      감소
                    </Link>
                    <span className="CartWrap__order-num ng-binding">1</span>
                    <Link className="CartWrap__btn btn-plus" to="#">
                      증가
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="CartWrap__clearfix">
          <span className="CartWrap__list-group-item minimum-order-price">
            <p className="CartWrap__ng-binding">최소주문금액 : 20,000원 이상</p>
          </span>
          <span className="CartWrap__list-group-item cart-total-order-price ng-binding">
            합계: 58,000원
          </span>
        </div>
        <div className="CartWrap__cart-btn">
          <Link className="CartWrap__btn btn-lg btn-ygy2 btn-left" to="#" />
          {/* 장바구니가 비어있지 않을 때*/}
          <span ng-show="CartWrap__add-menu">메뉴추가</span>
          {/* 장바구니가 비어있을 때*/}
          {/* <span ng-show="cart.is_empty()" class="ng-hide">
            홈으로 가기
          </span> */}
          <Link className="CartWrap__btn btn-lg btn-ygy1 btn-right" to="#">
            주문하기
          </Link>
        </div>
      </div>
    );
  }
}
