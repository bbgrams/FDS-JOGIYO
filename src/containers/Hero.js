import React, { Component } from 'react';
import HeroView from '../components/HeroView';
import { withKakao } from '../contexts/kakaoApiContext';

class Hero extends Component {
  render() {
    const { handleGpsClick } = this.props;
    return <HeroView findMyAddress={handleGpsClick} />;
  }
}

export default withKakao(Hero);
