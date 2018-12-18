import React, { Component } from 'react';
import StoreListView from '../components/StoreListView';
import api from '../api';

export default class StoreList extends Component {
  static defaultProps = {
    // 표시해주어야 하는 카테고리의 id
    categoryId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      storeList: [],
      category: null,
      filter: false,
    };
  }

  async componentDidMount() {
    const { categoryId } = this.props;
    const { data: category } = await api.get('/restaurants/api/category/');
    const { data: storeList } = await api.get('restaurants/api/restaurant/', {
      params: {
        categories: categoryId,
      },
    });

    this.setState({ storeList, category });
  }
  render() {
    const { storeList, category } = this.state;
    const { categoryId } = this.props;
    return (
      <StoreListView
        storeList={storeList}
        category={category}
        categoryId={categoryId}
      />
    );
  }
}
