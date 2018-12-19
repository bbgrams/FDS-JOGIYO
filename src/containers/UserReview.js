import React, { Component } from 'react';
import UserReviewView from '../components/UserReviewView';
import api from '../api';

export default class UserReview extends Component {
  static defaultProps = {
    storeId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      review: [],
    };
  }
  async componentDidMount() {
    const { storeId } = this.props;
    const { data: review } = await api.get(
      '/restaurants/api/' + storeId + '/review/'
    );
    this.setState({
      review,
    });
  }

  render() {
    const { review } = this.state;
    const { ownerReplyCount } = this.props;
    return (
      <div>
        <UserReviewView review={review} ownerReplyCount={ownerReplyCount} />
      </div>
    );
  }
}
