import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogOut extends Component {
  componentWillMount() {
    this.props.handleLogOut()
  }
  render() {
    return <Redirect to="/" />
  }
}

export default LogOut;
