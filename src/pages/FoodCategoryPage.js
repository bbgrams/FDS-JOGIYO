import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class FoodCategoryPage extends Component {
  render() {
    return <Layout>
        <Link className="FoodCategory__link--all" to="/restaurant">
          전체 보기
        </Link>
        <Link className="FoodCategory__link--franchise" to="/restaurant/?">
          프랜차이즈
        </Link>
        <Link className="FoodCategory__link--chicken" to="/restaurant/?category=chicken">
          치킨
        </Link>
        <Link className="FoodCategory__link--all" to="/restaurant/?category=">
          피자/양식
        </Link>
      <Link className="FoodCategory__link--all" to="/restaurant/?category=">
          중국집
        </Link>
      <Link className="FoodCategory__link--all" to="/restaurant/?category=">
          한식
        </Link>
      <Link className="FoodCategory__link--all" to="/restaurant/?category=">
          일식/돈까스
        </Link>
      <Link className="FoodCategory__link--all" to="/restaurant/?category=">
          족발/보쌈
        </Link>
        <Link className="FoodCategory__link--all" to="/all">
          야식
        </Link>
        <Link className="FoodCategory__link--all" to="/all">
          분식
        </Link>
        <Link className="FoodCategory__link--all" to="/all">
          카페/디저트
        </Link>
      </Layout>;
  }
}
