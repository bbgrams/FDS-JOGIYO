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
      menu: [],
    };
  }

  async componentDidMount() {
    const { storeId } = this.props;
    // 어떻게 id 값을 받아와야하는 것일 까?
    const { data: menu } = await api.get('/restaurants/api/' + 12 + '/menu/');
    this.setState({
      menu,
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        <MenuView menu={menu} />
      </div>
    );
  }
}
