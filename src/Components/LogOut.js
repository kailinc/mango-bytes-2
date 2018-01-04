import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAlert } from 'react-alert';

import API from '../API';

const store = require('../store');

class LogOut extends Component {
  componentWillMount() {
    const id = store.user.id
    const token = store.user.token
    API.signOut(id,token)
      .then((response) => {
        store.user = {}
      })
      .catch((error) => {
        this.props.alert.error('There was a problem logging you out.')
      })
  }
  render() {
    return <Redirect to="/" />
  }
}

export default withAlert(LogOut);
