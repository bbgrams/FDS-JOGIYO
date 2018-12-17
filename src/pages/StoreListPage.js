import React, { Component } from 'react';
import Layout from '../components/Layout';
import StoreList from '../containers/StoreList';

export default class StoreListPage extends Component {
  render() {
    const { match, history, location } = this.props;
    const categoryId = match.params.id;

    return (
      <Layout>
        <StoreList
          key={categoryId}
          categoryId={categoryId}
          history={history}
          location={location}
        />
      </Layout>
    );
  }
}
