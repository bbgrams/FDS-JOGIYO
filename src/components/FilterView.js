import React, { Component } from 'react';
import './FilterView.scss';

export default class FilterView extends Component {
  render() {
    return (
      <div className="StoreList__sort">
        <select name="" id="" className="StoreList__sort__select">
          <option value="">기본 정렬순</option>
          <option value="">별점순</option>
          <option value="">리뷰 많은순</option>
          <option value="">최소 주문 금액순</option>
        </select>
      </div>
    );
  }
}
