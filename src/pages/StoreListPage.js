import React, { Component } from 'react';
import Layout from '../components/Layout';
import StoreList from '../containers/StoreList';

export default class StoreListPage extends Component {
  render() {
    const { match, history, location } = this.props;
    const categoryId = match.params.id;
    // const p = new URLSearchParams(location.pathname);
    // console.log(p);
    // const hello = p.get('hello');
    // console.log(hello);

    return (
      <Layout>
        <StoreList
          key={location.pathname + location.search}
          categoryId={categoryId}
          history={history}
          location={location}
        />
      </Layout>
    );
  }
}
