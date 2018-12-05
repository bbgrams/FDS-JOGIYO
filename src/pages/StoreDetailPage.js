import React, { Component } from "react";
import StoreDetail from "../containers/StoreDetail";
import Layout from "../components/Layout";

export default class StoreDetailPage extends Component {
  render() {
    return (
      <Layout>
        <StoreDetail />;
      </Layout>
    );
  }
}
