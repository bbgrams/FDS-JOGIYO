import React, { Component } from 'react';
import Login from '../containers/Login';
import Layout from '../components/Layout';

export default class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <div className="Login">
          <React.Fragment>
            <div className="Login__login__wrap">
              <form>이메일 주소 입력(필수)</form>
            </div>
            <div className="Login__register-txt">회원 가입 글씨</div>
          </React.Fragment>
        </div>
        <Login />
      </Layout>
    );
  }
}
