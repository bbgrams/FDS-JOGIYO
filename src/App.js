import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Hero from './containers/Hero';

import FoodCategoryPage from './pages/FoodCategoryPage';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreListPage from './pages/StoreListPage';
import StoreList from './containers/StoreList';
import StoreDetailPage from './pages/StoreDetailPage';

// FontAwesome 적용
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={FoodCategoryPage} />
          <Route path="/all" component={StoreListPage} />
          <Route path="/franchise" component={StoreList} />
          <Route path="/chicken" component={StoreList} />
          <Route path="/store/:id" component={StoreDetailPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
