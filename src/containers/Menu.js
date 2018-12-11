import React, { Component } from 'react';
import MenuView from '../components/MenuView';
<<<<<<< HEAD
import api from '../api';

export default class Menu extends Component {
  static defaultProps = {
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      food: [],
      rest: [],
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;

    const { data: menu } = await api.get(
      '/restaurants/api/' + storeId + '/menu/'
    );

    const [first, ...rest] = menu;

    this.setState({
      food: first.food,
      rest,
    });
  }

  render() {
    const { food, rest } = this.state;
    return (
      <div>
        <MenuView food={food} rest={rest} />
=======

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuView />
>>>>>>> 상점 상세 정보 페이지 구현 중: StoreDetailView 수정, MenuPage, UserReviewPage, StoreInfoPage 와 관련된 cc, pc 생성 및 적용
      </div>
    );
  }
}
