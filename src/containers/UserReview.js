import React, { Component } from 'react';
import UserReviewView from '../components/UserReviewView';
import api from '../api';

export default class UserReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: [],
    };
  }
  async componentDidMount() {
    const { data: review } = await api.get(
      '/restaurants/api/' + 12 + '/review/'
    );
    this.setState({
      review,
    });
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        <UserReviewView review={review} />
      </div>
    );
  }
}
