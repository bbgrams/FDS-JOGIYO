import React, { Component } from 'react';
import './HeroView.scss';

export default class HeroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultValue: '',
    };
  }

  async componentDidMount() {
    // console.log(addrString.firstRegion);
    // console.log(addrString.secondRegion);
    // console.log(addrString.thirdRegion);
  }

  render() {
    const { findMyAddress } = this.props;
    let addrInput = JSON.parse(sessionStorage.getItem('addrString'));

    let addrShow =
      addrInput &&
      addrInput.firstRegion +
        ' ' +
        addrInput.secondRegion +
        ' ' +
        addrInput.thirdRegion;
    sessionStorage.setItem('addrShow', JSON.stringify(addrShow));

    return (
      <form className="Hero">
        <fieldset>
          <legend className="readable-hidden">위치 검색</legend>
          <button onClick={e => findMyAddress(e)} className="Hero__gps-icon">
            현재위치 찾기
          </button>
          <label className="readable-hidden" htmlFor="location-search">
            위치 검색
          </label>
          <input
            defaultValue={addrShow}
            type="text"
            id="location-search"
            className="Hero__address-input"
          />
          <button className="Hero__clear-btn">지우기</button>
          <button className="Hero__search-btn">검색</button>
        </fieldset>
      </form>
    );
  }
}
