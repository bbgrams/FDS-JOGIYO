import React, { Component } from 'react';
import Collapse from './Collapse';

export default class PayView extends Component {
  static defaultProps = {
    show: true,
  };
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <form className="Pay">
        <fieldset>
          <legend>결제하기</legend>
          <h1 className="Pay__title">결제하기</h1>
          <Collapse name="배달정보" initialShow={true}>
            <p className="Pay__info">주소</p>
            <div className="Pay__input-address">
              <label htmlFor="address1" className="readable-hidden">
                시군구동
              </label>
              <input
                type="text"
                defaultValue="서울 성동구 성수2가3동"
                id="address1"
                disabled
              />
              <label htmlFor="address2" className="readable-hidden">
                상세주소 입력창
              </label>
              <input
                type="text"
                placeholder="(필수)상세주소 입력"
                id="address2"
                required
              />
              <p className="Pay__input-address__check">
                상세한 주소를 입력해주세요.
              </p>
            </div>
            <p className="Pay__info">휴대전화번호</p>
            <div className="Pay__input-phone">
              <label htmlFor="phone" className="readable-hidden">
                휴대전화번호 입력 창
              </label>
              <input
                type="text"
                id="phone"
                placeholder="(필수)휴대전화 입력"
                required
              />

              <input type="checkbox" name="" id="safeNumber" />
              <label htmlFor="safeNumber">안심번호 사용</label>
            </div>
          </Collapse>
          <Collapse name="주문시 요청사항">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="주문시 요청 사항이 있으시면 남겨주세요"
            />
          </Collapse>
        </fieldset>
      </form>
    );
  }
}
