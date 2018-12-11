import React, { Component } from 'react';
import LoginView from '../components/LoginView';

export default class Login extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     username: '',
  //     password: '',
  //     success: false,
  //   };
  // }
  // handleUsernameChange(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }
  // handlePasswordChange(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }
  // async handleLoginButtonClick() {
  //   const { onLogin } = this.props;
  //   const { username, password } = this.state;
  //   await onLogin(username, password);
  //   this.setState({
  //     success: true,
  //   });
  // }

  render() {
    // const { login } = this.props;
    return (
      <LoginView
      // onLogin={login}
      />
    );
  }
}
