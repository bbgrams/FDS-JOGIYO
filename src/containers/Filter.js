import React, { Component } from 'react';
import FilterView from '../components/FilterView';

export default class Filter extends Component {
  // 백엔드에서 더 세세한 필터 기능을 만들어주는 것이 맞는 것 같은데..

  async componentDidMount() {}
  render() {
    return (
      <div>
        <FilterView />
      </div>
    );
  }
}
