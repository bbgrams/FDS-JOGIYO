import React, { Component } from "react";
import StoreDetail from "../containers/StoreDetail";
import Layout from "../components/Layout";

export default class StoreDetailPage extends Component {
  render() {
<<<<<<< HEAD
    // const { location } = this.props;
    // const p = new URLSearchParams(location.search);
    // const storeId = p.get("id");
    const { match } = this.props;
    const storeId = match.params.id;

=======
    const { match } = this.props;
    const storeId = match.params.id;
>>>>>>> ca1ca623e88e5581fe05ec935b386b00330e35f0
    return (
      <Layout>
        <StoreDetail storeId={storeId} />
      </Layout>
    );
  }
}
