import React, { Component } from 'react';
import './App.css';

import FoodCategoryPage from './pages/FoodCategoryPage';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreListPage from './pages/StoreListPage';
import StoreDetailPage from './pages/StoreDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import PayPage from './pages/PayPage';
import { KakaoApiProvider } from './contexts/kakaoApiContext';
class App extends Component {
  render() {
    return (
      <KakaoApiProvider>
        {' '}
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={FoodCategoryPage} />
            <Route path="/category/:id" component={StoreListPage} />
            <Route path="/store/:id" component={StoreDetailPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/pay" component={PayPage} />
            <Route path="/cart" component={CartPage} />
          </React.Fragment>
        </BrowserRouter>
      </KakaoApiProvider>
    );
  }
}

export default App;
