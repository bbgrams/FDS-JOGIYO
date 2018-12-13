import React, { Component } from 'react';
import HeroView from '../components/HeroView';

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationX: 0,
      locationY: 0,
    };
  }

  async componentDidMount() {
    const handleSetState = this.handleSetState;
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function(position) {
          handleSetState(position.coords.latitude, position.coords.longitude);
        },
        function(error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }

  handleSetState = (latitude, longitude) => {
    this.setState({ locationX: latitude, locationY: longitude });
  };

  render() {
    return <HeroView />;
  }
}
