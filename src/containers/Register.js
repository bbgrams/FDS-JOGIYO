import React, { Component } from 'react';
import RegisterView from '../components/RegisterView';
import api from '../api';
export default class RegisterForm extends Component {
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

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password, phoneNumber, nickName } = this.state;
    // DB에 있는 모든 user 정보를 가져온다.
    const { data: users } = await api.get('/members/api/user/', {
      params: {
        username,
      },
    });
    // 사용자 이름 중복체크
    // 사용자가 입력한 username(이메일 주소)와
    // DB에서 가져온 모든 user의 username 중 일치하는 데이터가 있을 경우,
    // 응답으로 온 users의 길이가 0보다 크므로
    if (users.length > 0) {
    }
    const res = await api.post('/members/api/user/', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
  }

  handleFieldChange(e, name) {
    // name 변수에 저장되어 있는 문자열을
    // 그대로 속성 이름으로 사용하기
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return <RegisterView {...this.state} />;
  }
}
