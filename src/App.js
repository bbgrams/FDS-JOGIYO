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

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PayPage from './pages/PayPage';
library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={FoodCategoryPage} />
          <Route path="/category/:id" component={StoreListPage} />
          <Route path="/store/:id" component={StoreDetailPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/pay" component={PayPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
