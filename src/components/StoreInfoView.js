import React, { Component } from 'react';

export default class StoreInfoView extends Component {
  static defaultProps = {
    info: [
      // "begin": "11:30:00",
      // "end": "20:00:00",
      // "companyName": "씨제이푸드빌 (주)",
      // "companyNumber": "312-81-42519",
      // "countryOrigin": "원산지 더미 ㅡㅠㅡ",
      // "introductionText": ""
    ],
  };

  render() {
    const { info } = this.props;
    return <div className="StoreInfo">업체 정보</div>;
  }
}
