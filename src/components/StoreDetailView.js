import React, { Component } from 'react';

export default class StoreDetailView extends Component {
  static defaultProps = {
    id: null,
    name: '',
    menuSet: [],
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { id, name, menuSet } = this.props;

    return (
      <React.Fragment>
        <div className="StoreDetail__info-wrap">
          <h1 className="StoreDetail__name">{name}</h1>
          <div>{id}</div>
          <div>
            메뉴
            {menuSet.map(m => (
              <div key={m.id}>{m.name}</div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
