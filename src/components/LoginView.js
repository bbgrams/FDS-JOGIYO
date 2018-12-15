import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import logo from '../images/logo-yogiyo.png';
import './LoginView.scss';

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
    };
    //로그인에 성공하면,  sucess를 true를 바꿔주고 Redirect를 호출
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    this.setState({ success: true });
    // Redirect 컴포넌트를 렌더링 -> 주소표시줄의 상태가 바뀜
  }

  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Login">
        <div className="Login__login__wrap">
          <form name="Login__login__form">
            <div className="Login__login__content">
              <div className="Login__title-logo">
                <img src={logo} alt="요기요" />
              </div>
              <ul className="Login__list">
                <li className="Login__list__item">
                  <input
                    type="text"
                    value={username}
                    className="Login__list__item-email"
                    placeholder="이메일 주소 입력(필수)"
                    onChange={e => this.handleUsernameChange(e)}
                  />
                </li>
                <li className="Login__list__item">
                  <input
                    type="password"
                    value={password}
                    className="Login__list__item-password"
                    placeholder="비밀번호 입력(필수)"
                    onChange={e => this.handlePasswordChange(e)}
                  />
                </li>
              </ul>
              <div className="Login__checkbox">
                <input
                  type="checkbox"
                  name="Login__checkbox__keep-login"
                  id="Login__checkbox__keep-login"
                />

                <label htmlFor="Login__checkbox__keep-login">자동 로그인</label>
                <span className="Login__checkbox__find">
                  <Link className="Login__checkbox__find__id" to="#">
                    아이디 찾기
                  </Link>
                  <Link className="Login__checkbox__find__password" to="#">
                    비밀번호 찾기
                  </Link>
                </span>
              </div>
            </div>
            <button
              type="button"
              className="Login__button__login-btn"
              onClick={() => this.handleLoginButtonClick()}
            >
              로그인
            </button>
            <button type="button" className="Login__button__naver-btn">
              <span />
              네이버 아이디로 로그인
            </button>
          </form>
        </div>
        <div className="Login__register__txt">
          요기요가 처음이신가요? &nbsp;
          <span>이메일 회원 가입</span>
        </div>
      </div>
    );
  }
}
