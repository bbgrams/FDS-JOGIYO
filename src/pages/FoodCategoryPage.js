import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class FoodCategoryPage extends Component {
  render() {
    return (
      <Layout>
        <Link className="FoodCategory__link--all" to="/all">
          전체 보기
        </Link>
      </Layout>
    );
  }
}
