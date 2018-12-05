import React, { Component } from "react";

export default class StoreDetailView extends Component {
  static defaultProps = {
<<<<<<< HEAD
    storeInfo: []
  };
  render() {
    const { id } = this.props;

    return <div>{id}</div>;
=======
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
    console.log(`gg`);
    return (
      <div className="StoreDetail__info-wrap">
        <h1 className="StoreDetail__name">{name}</h1>
        {console.log(name)}
        store
      </div>
    );
>>>>>>> ca1ca623e88e5581fe05ec935b386b00330e35f0
  }
}
