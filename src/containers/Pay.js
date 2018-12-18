import React, { Component } from 'react';
import PayView from '../components/PayView';

export default class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 주문내역 가데이터
      list: {
        store: '피자디아',
        menu: ['콤비네이션피자(R)', '콜라(L)', '치즈오븐스파게티'],
        price: 11000,
      },
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <PayView list={list} />
      </div>
    );
  }
}
