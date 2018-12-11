import React, { Component } from 'react';
import UserReviewView from '../components/UserReviewView';
<<<<<<< HEAD
import api from '../api';

export default class UserReview extends Component {
  static defaultProps = {
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      review: [],
    };
  }
  async componentDidMount() {
    const { storeId } = this.props;
    const { data: review } = await api.get(
      '/restaurants/api/' + storeId + '/review/'
    );
    this.setState({
      review,
    });
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        <UserReviewView review={review} />
=======

export default class UserReview extends Component {
  render() {
    return (
      <div>
        <UserReviewView />
>>>>>>> 상점 상세 정보 페이지 구현 중: StoreDetailView 수정, MenuPage, UserReviewPage, StoreInfoPage 와 관련된 cc, pc 생성 및 적용
      </div>
    );
  }
}
