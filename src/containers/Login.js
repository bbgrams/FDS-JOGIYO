import React, { Component } from 'react';
import LoginView from '../components/LoginView';

export default class Login extends Component {
  static defaultProps = {};

  render() {
    const { login } = this.props;
    return <LoginView onLogin={login} />;
  }
}
