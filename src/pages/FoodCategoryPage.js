import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './FoodCategoryPage.scss';

export default class FoodCategoryPage extends Component {
  render() {
    return (
      <Layout>
        <div className="FoodCategory">
          <div className="FoodCategory__link-wrap">
            <Link className="FoodCategory__link--all" to="/category">
              전체 보기
            </Link>
            <Link className="FoodCategory__link--alone" to="/category/8">
              1인분 주문
            </Link>
            <Link className="FoodCategory__link--franchise" to="/category/2">
              프랜차이즈
            </Link>
            <Link className="FoodCategory__link--chicken" to="/category/7">
              치킨
            </Link>
            <Link className="FoodCategory__link--pizza" to="/category/1">
              피자/양식
            </Link>
            <Link className="FoodCategory__link--chinese" to="/category/11">
              중식
            </Link>
            <Link className="FoodCategory__link--korean" to="/category/6">
              한식
            </Link>
            <Link className="FoodCategory__link--japanese" to="/category/12">
              일식/돈까스
            </Link>
            <Link className="FoodCategory__link--pig" to="/category/4">
              족발/보쌈
            </Link>
            <Link className="FoodCategory__link--night" to="/category/10">
              야식
            </Link>
            <Link className="FoodCategory__link--snack" to="/category/9">
              분식
            </Link>
            <Link className="FoodCategory__link--cafe" to="/category/3">
              카페/디저트
            </Link>
          </div>
        </div>
        {/* <StoreList key={categories} categories={categories} /> */}
      </Layout>
    );
  }
}
