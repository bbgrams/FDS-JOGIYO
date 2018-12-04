import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./containers/Hero";

import FoodCategoryPage from "./pages/FoodCategoryPage";
import { BrowserRouter, Route } from "react-router-dom";
import StoreListPage from "./pages/StoreListPage";
import StoreList from "./containers/StoreList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={FoodCategoryPage} />
          <Route path="/all" component={StoreListPage} />
          <Route path="/franchise" component={StoreList} />
          <Route path="/chicken" component={StoreList} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
