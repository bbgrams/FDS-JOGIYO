import React, { Component } from 'react';
import RestaurantListView from '../components/RestaurantListView';
import api from '../api';

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    const { data: list } = await api.get('/restaurants/api/restaurant/');
    this.setState({
      list,
    });
  }

  render() {
    const { list } = this.state;
    return <RestaurantListView list={list} />;
  }
}
