import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./containers/Hero";

import FoodCategoryPage from "./pages/FoodCategoryPage";
import { BrowserRouter, Route } from "react-router-dom";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantList from "./containers/RestaurantList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={FoodCategoryPage} />
          <Route path="/all" component={RestaurantListPage} />
          <Route path="/franchise" component={RestaurantList} />
          <Route path="/chicken" component={RestaurantList} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
