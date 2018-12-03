import React, { Component } from 'react';

export default class RestaurantListView extends Component {
  static defaultProps = {
    list: [],
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(l => (
          <div key={l.id}>
            <div>{l.id}</div>
            <div>{l.name}</div>
            <img src={l.logo_url} alt={l.name} />
            <div>{l.min_order_amount}</div>
          </div>
        ))}
      </div>
    );
  }
}
