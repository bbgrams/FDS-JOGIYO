import React, { Component } from "react";

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default class FoodCategoryPage extends Component {
  render() {
    // const { location } = this.props;
    // const p = new URLSearchParams(location.search);
    // const categories = p.get("categories");
    // console.log(location.search);
    // console.log(categories);
    return (
      <Layout>
        <Link className="FoodCategory__link--all" to="/all">
          전체 보기
        </Link>
        <Link
          className="FoodCategory__link--franchise"
          to="/?categories=franchise"
        >
          프랜차이즈
        </Link>
        <Link className="FoodCategory__link--chicken" to="/?categories=chicken">
          치킨
        </Link>
        {/* <Link className="FoodCategory__link--all" to="/restaurant/?category=">
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
      <Link className="FoodCategory__link--latenightsnack" to="/latenightsnack">
          야식
        </Link>
      <Link className="FoodCategory__link--carbsnacks" to="/carbsnacks">
          분식
        </Link>
        <Link className="FoodCategory__link--all" to="cafedessert">
          카페/디저트
        </Link> */}
      </Layout>
    );
  }
}
