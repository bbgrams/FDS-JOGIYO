import React, { Component } from 'react';
import Layout from '../components/Layout';
import StoreList from '../containers/StoreList';

export default class StoreListPage extends Component {
  render() {
    return (
      <Layout>
        <StoreList />
      </Layout>
    );
  }
}
