import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartView extends Component {
  render() {
    return (
      <div className="cart-wrap">
        <div className="sub-title">
          <span>주문표</span>
          {/* <Link to='#'></Link> */}
          <span class="ico-clear" />
        </div>
        <div className="cart" />
        <div className="restaurant-name">
          <Link className="ng-binding" to="#" />
          <div>
            <span className="coupon-base ng-binding">배달할인 3,000원</span>
            <span className="coupon-base coupon-style1 ng-binding ng-hide">
              추가할인 0%
            </span>
            <span className="txt-info1 ng-binding ng-hide">
              할인 가능 시간 : ~{' '}
            </span>
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item clearfix ng-scope">
            <div className="row">
              <div className="menu-name ng-binding">
                스노우볼 오리지널 크러스트 L
                <div>
                  <div className="col-xs-6 pull-left">
                    <Link className="btn btn-del-menu" to="#" />
                    <span className="order-price ng-binding" />
                  </div>
                  <div className="col-xs-6 text-right">
                    <Link className="btn btn-minus" to="#">
                      감소
                    </Link>
                    <span className="order-num ng-binding">1</span>
                    <Link className="btn btn-plus" to="#">
                      증가
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item clearfix ng-scope">
            <div className="row">
              <div className="menu-name ng-binding">
                갈릭 페퍼 스테이크 오리지널 크러스트 L
                <div>
                  <div className="col-xs-6 pull-left">
                    <Link className="btn btn-del-menu" to="#">
                      삭제
                    </Link>
                    <span className="order-price ng-binding">29,500원</span>
                  </div>
                  <div className="col-xs-6 text-right">
                    <Link className="btn btn-minus" to="#">
                      감소
                    </Link>
                    <span className="order-num ng-binding">1</span>
                    <Link className="btn btn-plus" to="#">
                      증가
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="clearfix">
          <span className="list-group-item minimum-order-price">
            <p className="ng-binding">최소주문금액 : 20,000원 이상</p>
          </span>
          <span className="list-group-item cart-total-order-price ng-binding">
            합계: 58,000원
          </span>
        </div>
        <div className="cart-btn">
          <Link className="btn btn-lg btn-ygy2 btn-left" to="#" />
          {/* 장바구니가 비어있지 않을 때*/}
          <span ng-show="add-menu">메뉴추가</span>
          {/* 장바구니가 비어있을 때*/}
          {/* <span ng-show="cart.is_empty()" class="ng-hide">
            홈으로 가기
          </span> */}
          <Link className="btn btn-lg btn-ygy1 btn-right" to="#">
            주문하기
          </Link>
        </div>
      </div>
    );
  }
}
