import React, { Component } from 'react';
import './MenuView.scss';

export default class MenuView extends Component {
  static defaultProps = {
    menu: [],
  };
  render() {
    const { menu } = this.props;
    return (
      <React.Fragment>
        <div>
          {menu.map(m => (
            <div className="store-title" key={m.id}>
              {m.name}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
