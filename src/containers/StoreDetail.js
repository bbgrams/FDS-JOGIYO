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
      minOrderAmount: '',
      reviewAvg: 0,
      logoUrl: '',
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;
    // const { data: store } = await api.get(`/restaurants/api/${storeId}/menu/`);
    const { data: storeInfo } = await api.get(
      `/restaurants/api/${storeId}/info/`
    );
    this.setState({
      ...storeInfo,
    });
  }

  render() {
    // console.log('storeId', this.state.id);
    const { storeId } = this.props;
    return (
      <div>
        <StoreDetailView {...this.state} id={storeId} />
      </div>
    );
  }
}
