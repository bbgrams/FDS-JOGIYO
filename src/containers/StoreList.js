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
<<<<<<< HEAD
=======
      filter: false,
      category: [],
      // location: {},
>>>>>>> e65b66a1a0670a2cd726e35f92a0f9abfa547c3c
    };
  }
  async componentDidMount() {
    const p = new URLSearchParams(this.props.location.search);
    const sortValue = p.get('sort');
    const location = JSON.parse(sessionStorage.getItem('location'));
    console.log(location.x, location.y);
    const { categoryId } = this.props;
    // 카테고리 목록을 보여주는 데이터
    const { data: category } = await api.get('/restaurants/api/category/');

    const { data: storeList } = await api.get('restaurants/api/restaurant/', {
      params: {
        lng: location.x,
        lan: location.y,
        categories: categoryId,
        ordering: sortValue,
      },
    });
<<<<<<< HEAD
    // 여기다가 정렬과 관련된 정보를 받아올 까?
=======
    this.setState({
      storeList,
      category,
      location,
    });
  }
>>>>>>> e65b66a1a0670a2cd726e35f92a0f9abfa547c3c

  onSortChange(value) {
    const locationXY = JSON.parse(sessionStorage.getItem('location'));
    // 주소 표시줄의 상태를 바꾼다.
    const { history, categoryId, location } = this.props;

    history.push('/category/' + categoryId + '/?sort=' + value);

    // (history.push, URLSearchParams 사용)
    // 이후, location.search를 보고,
    // 서버에 요청을 다르게 보내거나 화면을 다르게 그려줄 수 있다.
  }
  render() {
    const { storeList, category } = this.state;
    const { categoryId } = this.props;
    return (
      <StoreListView
        storeList={storeList}
        category={category}
        categoryId={categoryId}
        onSortChange={value => this.onSortChange(value)}
      />
    );
  }
}
