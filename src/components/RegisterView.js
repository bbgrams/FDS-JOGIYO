import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RegisterFormView extends Component {
  render() {
    return (
      <div className="Register">
        <form name="Register_form">
          <div className="Register_form-form">
            <div className="snsLogin">
              SNS계정으로도 간편하게 가입하실 수 있습니다.
              <button type="button" className="btn-login-naver">
                <span>네이버 로고</span>
                네이버 아이디로 로그인
              </button>
            </div>
            <div className="memberInput">
              회원정보 입력
              <ul className="list-group">
                <li>
                  <input
                    type="text"
                    placeholder="(필수)이메일 주소 입력"
                    name="email"
                  />
                </li>
                <li>
                  <input
                    type="password"
                    placeholder="(필수)비밀번호 입력"
                    name="password"
                  />
                </li>
                <li>
                  <input
                    type="password"
                    placeholder="(필수)비밀번호 재확인"
                    name="confirm-password"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="(선택)닉네임 입력"
                    name="nickName"
                  />
                </li>
              </ul>
            </div>
            <div className="verification">
              휴대폰 인증
              <ul className="list-group">
                <li className="list-group-item">
                  <input
                    type="tel"
                    placeholder="(필수)휴대폰 전화번호 입력(-제외)"
                    name="phone"
                  />
                </li>
                <li className="list-group-item">
                  <input
                    type="text"
                    placeholder="인증번호 입력"
                    name="smsVerification"
                  />
                </li>
              </ul>
              <p className="phoneVerification_text">
                인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요.
              </p>
            </div>
            <div className="terms">
              <span className="title">약관동의</span>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="checkbox">
                    <input type="checkbox" id="all" name="all" />
                    <label htmlFor="all">전체동의</label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="checkbox">
                    <input type="checkbox" id="policy" name="policy" />
                    <label htmlFor="collect">이용약관동의(필수)</label>
                  </div>
                  <Link to="#">내용 보기</Link>
                </li>
                <li className="list-group-item">
                  <div className="checkbox">
                    <input type="checkbox" id="collect" name="collect" />
                    <label htmlFor="collect">
                      개인정보 수집 및 이용동의(필수)
                    </label>
                  </div>
                  <Link to="#">내용 보기</Link>
                </li>
                <li className="list-group-item">
                  <div className="checkbox">
                    <input type="checkbox" id="push" name="push" />
                    <label htmlFor="push">요기요 혜택알림 동의(선택)</label>
                  </div>
                </li>
              </ul>
              <div>
                <p className="text">
                  만 14세미만의 어린이의 경우 회원가입이 불가능합니다.
                </p>
                <Link to="#">내용 보기</Link>
              </div>
            </div>
            <button tyep="submit" className="btnJoin">
              회원가입 완료
            </button>
          </div>
        </form>
      </div>
    );
  }
}
