import React, { Component } from 'react';
import RegisterView from '../components/RegisterView';
import api from '../api';
import { withUser } from '../contexts/UserContext';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      phoneNumber: '',
      nickName: '',
      active: false,
    };
  }
  // async handleSubmit(e) {
  //   e.preventDefault();
  //   const username = e.target.elements.username.value;
  //   const password = e.target.elements.password.value;
  //   const nickName = e.target.elements.nickName.value;
  //   const phoneNumber = e.target.elements.phoneNumber.value;

  //   const { ...value } = { username, password, nickName, phoneNumber };

  //   await this.props.onRegister({ ...value });
  //   // 회원가입이 성공적으로 되었을 때
  //   this.setState({
  //     success: true,
  //   });
  // }

  render() {
    const {
      register,
      // handleSubmit,
    } = this.props;
    return (
      <RegisterView
        onRegister={register}
        // handleSubmit={e => handleSubmit(e)}
        {...this.state}
      />
    );
  }
}

export default withUser(Register);
