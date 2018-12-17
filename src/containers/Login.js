import React, { Component } from 'react';
import LoginView from '../components/LoginView';
import { withUser } from '../contexts/UserContext';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
    };
  }

  // async handleLoginButtonClick() {
  //   const { username, password } = this.state;
  //   await onLogin(username, password);
  //   // 로그인이 성공적으로 끝났을 때
  //   this.setState({ success: true });
  // }
  render() {
    const { login, handleLoginButtonClick } = this.props;
    return <LoginView handleLoginButtonClick={handleLoginButtonClick} />;
  }
}

export default withUser(Login);
