import React, { Component } from "react";

export default class HeroView extends Component {
  render() {
    return (
      <form className="Hero__form">
        <fieldset>
          <legend>위치 검색</legend>
          <button className="Hero__gps-icon">GPS 아이콘</button>
          <label htmlFor="location-search">위치 검색 창</label>
          <input type="text" id="location-search" />
          <button className="Hero__search-btn">검색</button>
        </fieldset>
      </form>
    );
  }
}
