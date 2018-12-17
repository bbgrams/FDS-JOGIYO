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
      filter: false,
      // location: {},
    };
  }

  async componentDidMount() {
    const location = JSON.parse(sessionStorage.getItem('location'));
    console.log(location.x, location.y);
    const { categoryId } = this.props;
    // 카테고리 목록을 보여주는 데이터
    const { data: category } = await api.get('/restaurants/api/category/');

    if (categoryId) {
      const { data: storeList } = await api.get('restaurants/api/restaurant/', {
        params: {
          lng: location.x,
          lan: location.y,
          categories: categoryId,
        },
      });
      this.setState({ storeList });
    } else {
      const { data: storeList } = await api.get('restaurants/api/restaurant/', {
        params: {
          lng: location.x,
          lan: location.y,
        },
      });
      this.setState({ storeList });
    }
    this.setState({ category, location });
  }

  onSortChange(value) {
    // 주소 표시줄의 상태를 바꾼다.
    // (history.push, URLSearchParams 사용)
    // 이후, location.search를 보고,
    // 서버에 요청을 다르게 보내거나 화면을 다르게 그려줄 수 있다.
  }
  render() {
    const { storeList, category } = this.state;
    return <StoreListView storeList={storeList} category={category} />;
  }
}
