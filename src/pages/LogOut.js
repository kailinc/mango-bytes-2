import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import userAPI from '../API/user';
import { resetUser } from '../actions/user';
import { resetCart } from '../actions/cart';
import { resetShipping } from '../actions/shipping';

class LogOut extends Component {
  componentDidMount() {
    userAPI.signOut(this.props.user.id, this.props.user.token)
      .then((response) => {
        this.props.dispatch(resetUser())
        this.props.dispatch(resetCart())
        this.props.dispatch(resetShipping())
      })
      .then(() => {
        localStorage.clear()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return <Redirect to="/mango-bytes-2" />
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LogOut);
