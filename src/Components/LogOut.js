import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../API.js';

class LogOut extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.logOut = this.logOut.bind(this)
  }

  LogOut(e) {
    e.preventDefault()
    const data = {
      passwords: this.state
    }
    const id = this.props.user.id
    const token = this.props.user.token
    API.changePassword(id,token,data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render()
    return{
    if (this.state.signedIn) {
      return <Redirect to='/'/>
    }
    return(
    )
  }
}

export default LogOut;
