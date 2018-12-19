import React, { Component } from 'react';
import StoreDetailView from '../components/StoreDetailView';
import api from '../api';

export default class StoreDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상점의 id
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      minOrderAmount: 0,
      reviewAvg: 0,
      logoUrl: '',
      reviewCount: 0,
      begin: '',
      end: '',
      companyName: '',
      companyNumber: '',
      countryOrigin: '',
      introductionText: '',
      estimatedDeliveryTime: '',
      exceptCash: null,
      paymentMethods: [],
      deliveryFee: 0,
      additionalDiscountPerMenu: null,
      ratingDeliveryAvg: 0,
      ratingQuantityAvg: 0,
      ratingTasteAvg: 0,
    };
  }
  reviewStar(count) {
    const num = Math.floor(count);
    const empty = 5 - num;
    const star = '★'.repeat(num) + '☆'.repeat(empty);
    return star;
  }

  async componentDidMount() {
    const { storeId } = this.props;

    const { data: storeInfo } = await api.get(
      `/restaurants/api/${storeId}/info/`
    );
    this.setState({
      ...storeInfo,
    });
  }

  render() {
    const { storeId } = this.props;
    return (
      <div>
        <StoreDetailView
          {...this.state}
          id={storeId}
          reviewStar={this.reviewStar.bind(this)}
        />
      </div>
    );
  }
}
