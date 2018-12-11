import React, { Component } from 'react';
import MenuView from '../components/MenuView';
import api from '../api';

export default class Menu extends Component {
  static defaultProps = {
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      food: [],
      rest: [],
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;

    const { data: menu } = await api.get(
      '/restaurants/api/' + storeId + '/menu/'
    );

    const [first, ...rest] = menu;

    this.setState({
      food: first.food,
      rest,
    });
  }

  render() {
    const { food, rest } = this.state;
    return (
      <div>
        <MenuView food={food} rest={rest} />
      </div>
    );
  }
}
