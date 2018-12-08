import React, { Component } from 'react';
import LoginView from '../components/LoginView';

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login 컨테이너</h1>
        <LoginView />
      </React.Fragment>
    );
  }
}
