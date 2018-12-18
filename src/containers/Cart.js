import React, { Component } from 'react';
import CartView from '../components/CartView';
export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderList: [],
    };
  }

  async componentDidMount() {
    // JSON.parse(sessionStorage.getItem('cart'))
    const orderList = JSON.parse(sessionStorage.getItem('cart'));
    this.setState({
      orderList: orderList,
    });
  }
  render() {
    console.log(this.state.orderList);
    return <CartView orderList={this.state.orderList} />;
  }
}
