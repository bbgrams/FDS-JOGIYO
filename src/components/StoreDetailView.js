import React, { Component } from "react";

export default class StoreDetailView extends Component {
  static defaultProps = {
    storeInfo: []
  };
  render() {
    const { id } = this.props;

    return <div>{id}</div>;
  }
}
