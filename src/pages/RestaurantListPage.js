import React, { Component } from 'react';
import Layout from '../components/Layout';
import RestaurantList from '../containers/RestaurantList';

export default class RestaurantListPage extends Component {
  render() {
    return (
      <Layout>
        <RestaurantList />
      </Layout>
    );
  }
}
