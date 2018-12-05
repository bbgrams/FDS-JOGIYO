import React, { Component } from "react";
import StoreDetailView from "../components/StoreDetailView";
import api from "../api";

export default class StoreDetail extends Component {
  static defaultProps = {
    // 표시해주어야하는 상점의 id
    storeId: null
  };
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: "",
      logoUrl: "",
      reviewAvg: "",
      minOrderAmount: 0,
      reviewCount: null,
      payment: true,
      estimatedDeliveryTime: ""

      // 데이터 예시
      //  {
      //   "id": 42,
      //   "name": "직화반상by셰플리(송파)",
      //   "logoUrl": "https://wps-9th-my-ldh-dev.s3.amazonaws.com/media/restaurant/%EC%A7%81%ED%99%94%EB%B0%98%EC%83%81by%EC%85%B0%ED%94%8C%EB%A6%AC%EC%86%A1%ED%8C%8C_20181018_%EA%B0%80%EB%A7%B9%EB%A1%9C%EA%B3%A0%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%95%BD%EC%A0%95%EC%84%9C_crop_200x200_cDqhi3k.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ3K36ZTVJRAJ346A%2F20181205%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20181205T061658Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=62900b55db36127af2d002f74129864d761d3b8083c3bf868b0d584824e2a107",
      //   "reviewAvg": "4.49",
      //   "minOrderAmount": 8000,
      //   "reviewCount": 72,
      //   "payment": true,
      //   "estimatedDeliveryTime": "35~45분",
      //   "additionalDiscountPerMenu": 0
      // }
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;
    const { data: store } = await api.get(
      "/restaurants/api/restaurant/" + storeId
    );

    this.setState({
      ...store
    });
  }

  render() {
    return <StoreDetailView {...this.state} />;
  }
}
