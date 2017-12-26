import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../API.js';

class LogOut extends Component {
  componentWillMount() {
    this.logOut()
  }

  logOut() {
    const id = this.props.user.id
    const token = this.props.user.token
    API.signOut(id,token)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          loggedOut: false
        })
      })
  }
  render() {
    return <Redirect to="/" />
  }
}

export default LogOut;
