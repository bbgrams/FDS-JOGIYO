import React, { Component } from "react";
import RestaurantListView from "../components/RestaurantListView";
import api from "../api";

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);

    this.state = {

      storeList: []
  
    };
  }

  async componentDidMount() {

    const { data: storeList } = await api.get("/restaurants/api/restaurant/");

    this.setState({
      storeList
    });
  }

  render() {
    const { storeList } = this.state;
    return <RestaurantListView storeList={storeList} />;
  }
}
