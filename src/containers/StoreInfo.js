import React, { Component } from 'react';
import StoreInfoView from '../components/StoreInfoView';
import api from '../api';

export default class StoreInfo extends Component {
  static defaultProps = {
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      info: [],
    };
  }
  async componentDidMount() {
    const storeId = this.props;
    const { data: info } = await api.get(`restaurants/api/${storeId}/info/`);
    this.setState({
      info,
    });
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <StoreInfoView info={info} />
      </div>
    );
  }
}
