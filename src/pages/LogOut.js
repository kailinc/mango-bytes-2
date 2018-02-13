import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import API from '../API';
import { signOut } from '../actions/user';

class LogOut extends Component {
  componentDidMount() {
    API.signOut(this.props.user.id, this.props.user.token)
      .then((response) => {
        this.props.dispatch(signOut())
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return <Redirect to="/" />
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LogOut);
