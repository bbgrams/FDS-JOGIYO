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
      info: [],
      rest: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;
    const { loading } = this.state;

    const { data: menu } = await api.get(
      '/restaurants/api/' + storeId + '/menu/'
    );

    const [first, ...rest] = menu;

    this.setState({
      food: first.food,
      info: first.restaurant,
      rest,
      loading: false,
    });
  }

  render() {
    const { food, rest, info, loading } = this.state;

    return (
      <div>
        <MenuView food={food} rest={rest} info={info} loading={loading} />
      </div>
    );
  }
}
