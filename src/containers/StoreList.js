import React, { Component } from 'react';
import StoreListView from '../components/StoreListView';
import api from '../api';

export default class StoreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeList: [],
    };
  }

  async componentDidMount() {
    const { categories } = this.props;
    const { data: storeList } = await api.get('/restaurants/api/restaurant/', {
      params: {
        categories,
      },
    });
    this.setState({
      storeList,
    });
  }

  render() {
    const { storeList } = this.state;
    return <StoreListView storeList={storeList} />;
  }
}
