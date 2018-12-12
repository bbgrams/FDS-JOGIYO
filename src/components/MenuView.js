import React, { Component } from 'react';

import './MenuView.scss';

import Collapse from './Collapse';
import Modal from './Modal';

export default class MenuView extends Component {
  static defaultProps = { food: [] };

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      foodId: 0,
      foodImage: '',
      foodName: '',
      foodPrice: 0,
    };
  }

  handleShowModal = () => {
    this.setState({
      show: true,
    });
  };

  handleHideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { food, rest } = this.props;

    return (
      <React.Fragment>
        <div className="MenuContent">
          <div className="PhotoMenu">
            {food.map(f => (
              <div
                className="PhotoMenu__content"
                key={f.id}
                onClick={() => {
                  this.setState({
                    foodId: f.id,
                    foodImage: f.image,
                    foodName: f.name,
                    foodPrice: f.price,
                  });
                  this.handleShowModal();
                }}
              >
                <img
                  className="PhotoMenu__content__img"
                  src={f.image}
                  alt={f.name}
                />
                <div className="PhotoMenu__content__name">{f.name}</div>
                <div className="PhotoMenu__content__price">
                  {f.price.toLocaleString()} 원
                </div>
              </div>
            ))}
          </div>

          <div className="RestOfMenu">
            {rest.map(item => (
              <Collapse key={item.id} name={item.name}>
                <div className="RestOfMenu__list">
                  {item.food.map(f => (
                    <div
                      className="RestOfMenu__list__item"
                      key={f.id}
                      onClick={() => {
                        this.setState({
                          foodId: f.id,
                          foodImage: f.image,
                          foodName: f.name,
                          foodPrice: f.price,
                        });
                        this.handleShowModal();
                      }}
                    >
                      <div className="RestOfMenu__list__item__text">
                        <p className="RestOfMenu__list__item__text__name">
                          {f.name}
                        </p>
                        <p className="RestOfMenu__list__item__text__price">
                          {f.price.toLocaleString()} 원
                        </p>
                      </div>
                      <img src={f.image} alt={f.name} />
                    </div>
                  ))}
                </div>
              </Collapse>
            ))}
          </div>
        </div>

        <Modal
          show={this.state.show}
          handleClose={this.handleHideModal}
          id={this.state.foodId}
          image={this.state.foodImage}
          name={this.state.foodName}
          price={this.state.foodPrice}
        />
      </React.Fragment>
    );
  }
}

// Modal 컴포넌트
// const Modal = ({ handleClose, show, id, image, name, price }) => {
//   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <div className="modal-main">
//         <div>
//           <p>{name}</p>
//           <img src={image} alt={name} />
//           <p>가격: {price.toLocaleString()}</p>
//           <p>수량</p>
//           {/* 추가되면 추가되었다는 팝업과 함께 모달이 닫힘 */}
//           <button>주문표에 추가</button>
//           <button>주문하기</button>
//         </div>
//         <button onClick={handleClose}>닫기</button>
//       </div>
//     </div>
//   );
// };

// class Modal2 extends Component {
//   defaultProps = {
//     handleClose: () => {},
//     show: null,
//     id: 0,
//     image: '',
//     name: '',
//     price: 0,
//   };

//   render() {
//     const { handleClose, show, id, image, name, price } = this.props;

//     const showHideClassName = show
//       ? 'modal display-block'
//       : 'modal display-none';
//     return (
//       <div className={showHideClassName}>
//         <div className="modal-main">
//           <div>
//             <p>{name}</p>
//             <img src={image} alt={name} />
//             <p>가격: {price.toLocaleString()}</p>
//             <p>수량</p>
//             {/* 추가되면 추가되었다는 팝업과 함께 모달이 닫힘 */}
//             <button>주문표에 추가</button>
//             <button>주문하기</button>
//           </div>
//           <button onClick={handleClose}>닫기</button>
//         </div>
//       </div>
//     );
//   }
// }
