import React, { Component } from "react";

export default class StoreDetailView extends Component {
  static defaultProps = {
    id: null,
    name: "",
  };
  render() {
    const {
      id,
      name,
    } = this.props;
    // console.log(`gg`);
    return (
      <div className="StoreDetail__info-wrap">
        <h1 className="StoreDetail__name">{name}</h1>
        {/* {console.log(name)} */}
      </div>
    );
  }
}
