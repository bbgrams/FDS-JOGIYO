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
      // category,
      selectValue: '',
      // location: {},
    };
  }
  async componentDidMount() {
    const p = new URLSearchParams(this.props.location.search);
    const sortValue = p.get('sort');
    const location = JSON.parse(sessionStorage.getItem('location'));
    console.log(location.x, location.y);
    const { categoryId } = this.props;
    console.log(categoryId);
    // 카테고리 목록을 보여주는 데이터
    const { data: category } = await api.get('/restaurants/api/category/');

    if (categoryId == null) {
      const { data: storeList } = await api.get('restaurants/api/restaurant/', {
        params: {
          lng: location.x,
          lan: location.y,
          ordering: sortValue,
        },
      });
      this.setState({
        storeList,
        category,
        location,
        selectValue: sortValue,
      });
    } else {
      const { data: storeList } = await api.get('restaurants/api/restaurant/', {
        params: {
          lng: location.x,
          lan: location.y,
          categories: categoryId,
          ordering: sortValue,
        },
      });
      this.setState({
        storeList,
        category,
        location,
        selectValue: sortValue,
      });
    }
  }
  onSortChange(value) {
    const locationXY = JSON.parse(sessionStorage.getItem('location'));
    // 주소 표시줄의 상태를 바꾼다.
    const { history, categoryId, location } = this.props;

    if (categoryId) {
      history.push('/category/' + categoryId + '/?sort=' + value);
    } else {
      history.push('/category/?sort=' + value);
    }

    // (history.push, URLSearchParams 사용)
    // 이후, location.search를 보고,
    // 서버에 요청을 다르게 보내거나 화면을 다르게 그려줄 수 있다.
  }

  render() {
    const { storeList, category, selectValue } = this.state;
    const { categoryId } = this.props;
    console.log('스토어리스트');
    console.log(storeList, category, selectValue);
    return (
      <StoreListView
        storeList={storeList}
        category={category}
        categoryId={categoryId}
        onSortChange={value => this.onSortChange(value)}
        selectValue={selectValue}
      />
    );
  }
}
