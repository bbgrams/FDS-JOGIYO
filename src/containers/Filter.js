import React, { Component } from 'react';
import FilterView from '../components/FilterView';

export default class Filter extends Component {
  // 백엔드에서 더 세세한 필터 기능을 만들어주는 것이 맞는 것 같은데..

  async componentDidMount() {}
  render() {
    return (
      <div>
        {/* withKakao를 둘러서 좌표 값을 받은 후 그 좌표 값에 대한 위치를 구한 다음에, 내가 보고있는 카테고리를 정한 다음에, 필터에 대한 마지막 요청...을 한다. */}
        <FilterView />
      </div>
    );
  }
}
