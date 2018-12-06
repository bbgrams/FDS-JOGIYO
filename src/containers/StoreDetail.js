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
      name: '',
      id: null,
      menuSet: [],
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;
    const { data: store } = await api.get(`/restaurants/api/${storeId}/menu`);

    this.setState({
      ...store[0],
    });
  }

  render() {
    return (
      <div>
        <StoreDetailView {...this.state} />
      </div>
    );
  }
}
