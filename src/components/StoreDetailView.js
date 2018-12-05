import React, { Component } from "react";

export default class StoreDetailView extends Component {
  static defaultProps = {
    id: null,
    name: "",
    logoUrl: "",
    reviewAvg: "",
    minOrderAmount: 0,
    reviewCount: null,
    payment: true,
    estimatedDeliveryTime: ""
  };
  render() {
    const {
      id,
      name,
      logoUrl,
      reviewAvg,
      minOrderAmount,
      reviewCount,
      payment,
      estimatedDeliveryTime
    } = this.props;
    return (
      <div className="StoreDetail__info-wrap">
        <h1 className="StoreDetail__name">{name}</h1>
      </div>
    );
  }
}
