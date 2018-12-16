import React, { Component } from 'react';
import Collapse from './Collapse';
import './PayView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default class PayView extends Component {
  static defaultProps = {
    show: true,
  };
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      infoShow: false,
    };
  }
  handleInfoClick() {
    this.setState(prevState => ({
      infoShow: !prevState.infoShow,
    }));
  }

  render() {
    const { infoShow } = this.state;
    return (
      <form className="Pay">
        <fieldset>
          <legend>결제하기</legend>
          <h1 className="Pay__title">결제하기</h1>
          <Collapse name="배달정보" initialShow={true}>
            <div className="Pay__contents">
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
                <div className="Pay__check-required">
                  <label htmlFor="address2" className="readable-hidden">
                    상세주소 입력창
                  </label>
                  <input
                    type="text"
                    placeholder="(필수)상세주소 입력"
                    id="address2"
                    required
                  />
                  <p className="Pay__check__text">
                    상세한 주소를 입력해주세요.
                  </p>
                </div>
              </div>
              <p className="Pay__info">휴대전화번호</p>
              <div className="Pay__input-phone">
                <div className="Pay__check-required">
                  <label htmlFor="phone" className="readable-hidden">
                    휴대전화번호 입력 창
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="(필수)휴대전화 입력"
                    required
                  />
                  <p className="Pay__check__text">
                    전화번호를 입력해주세요. (050 등 안심번호 사용 불가)
                  </p>
                </div>
                <div className="Pay__safe_number">
                  <input type="checkbox" name="" id="safeNumber" />
                  <label htmlFor="safeNumber">안심번호 사용</label>
                  <div className="Pay__safe_number__info">
                    <button
                      className="Pay__safe_number__info__btn"
                      onClick={() => this.handleInfoClick()}
                    >
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </button>
                    {infoShow ? (
                      <p className="Pay__safe_number__info__text">
                        안심번호는 고객님의 개인정보 보호를 위해 연락처 정보가
                        유출되지 않도록 1회성 임시번호를 발급하는 서비스 입니다.
                        발급된 안심번호는 일정시간 이후 자동으로 해지됩니다.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse name="주문시 요청사항" initialShow={true}>
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
