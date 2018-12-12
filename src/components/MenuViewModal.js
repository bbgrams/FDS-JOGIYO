import React, { Component } from 'react';
import './MenuViewModal.scss';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

export default class MenuViewModal extends Component {
  static defaultProps = {
    show: null,
    handleClose: () => {},
    rest: [],
  };

  render() {
    const { show, handleClose, rest } = this.props;
    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          컨텐츠가 들어올 자리입니다.
          {rest.map(r => (
            <p>{r.name}</p>
          ))}
          <p>이름</p>
          <p>가격</p>
          <p>수량</p>
          <div onClick={handleClose}>닫기</div>
        </div>
      </div>
    );
  }
}
