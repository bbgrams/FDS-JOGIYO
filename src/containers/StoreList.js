import React, { Component } from 'react';
import StoreListView from '../components/StoreListView';
import api from '../api';

export default class StoreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeList: [],
      // 카테고리 가데이터
      category: [
        { id: 1, name: '1인분 주문' },
        { id: 2, name: '프랜차이즈' },
        { id: 3, name: '피자' },
        { id: 4, name: '피자' },
        { id: 5, name: '피자' },
        { id: 6, name: '피자' },
        { id: 7, name: '피자' },
        { id: 8, name: '피자' },
        { id: 9, name: '피자' },
        { id: 10, name: '피자' },
        { id: 11, name: '피자' },
        { id: 12, name: '피자' },
      ],
    };
  }

  async componentDidMount() {
    const { categories } = this.props;
    const { data: storeList } = await api.get('restaurants/api/restaurant/', {
      params: {
        categories,
      },
    });
    this.setState({
      storeList,
    });
  }

  render() {
    const { storeList, category } = this.state;
    return <StoreListView storeList={storeList} category={category} />;
  }
}
