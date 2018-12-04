import React, { Component } from "react";
import Hero from "../containers/Hero";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Layout__header">
          <h1 className="Layout__logo">요기요</h1>
          <button className="Layout__login-btn">로그인</button>
          <button className="Layout__register-btn">회원가입</button>
          {/* 스프라이트 기법을 이용한 이미지 배치 */}
          <button>성수2가3동</button>
          <Hero />
        </div>
        {this.props.children}
        <div className="Layout__footer">
          <ul className="Layout__footer-menu">
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>통합포인트정책</li>
            <li>입점문의</li>
            <li>공지사항</li>
          </ul>
          <div className="Layout__company-wrap">
            <div className="Layout__company-name">(유)알지피코리아</div>
            <div className="Layout__company-info">
              서울시 강남구 테헤란로 5길 7 KG타워 10, 11, 12층 유한회사
              알지피코리아|대표자 : 강신봉|사업자등록번호:211-88-68802
              사업자정보확인통신판매업신고:제
              2011-서울강남-03322호|개인정보담당자 :
              privacy@yogiyo.co.kr|제휴문의 :
              partnership@rgpkorea.co.kr|고객만족센터 : 02-3447-3612 (24시간,
              연중무휴) support@yogiyo.co.kr|호스트서비스사업자 :
              (주)심플렉스인터넷
            </div>
            <div className="Layout__copyright">
              유한회사 알지피코리아는 통신판매중개자이며 통신판매의 당사자가
              아닙니다. 따라서 상품/ 거래정보 및 거래와 관련하여 요기요에 등록된
              판매자의 고의 또는 과실로 소비자에게 발생하는 손해에 대해 유한회사
              알지피코리아는 책임을 지지 않습니다. 상품 및 거래에 관하여 보다
              정확한 정보는 해당 판매자에게 직접 확인하여 주시기 바랍니다.
              Copyright YOGIYO. All Rights Reserved.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
