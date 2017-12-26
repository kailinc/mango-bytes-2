import React, { Component } from 'react';
import Routes from './Routes';
import { Redirect } from 'react-router-dom';

import API from '../API';

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
      },
      cart: {
      }
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleChangePwd = this.handleChangePwd.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleSignUp(data) {
    API.signUp(data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleSignIn(data) {
    API.signIn(data)
      .then((response) => {
        this.setState({
          user: response.data.user
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChangePwd(data) {
    const id = this.state.user.id
    const token = this.state.user.token
    API.changePassword(id, token, data)
      .then((response) => {
        console.log('this is response', response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleLogOut() {
    const id = this.state.user.id
    const token = this.state.user.token
    API.signOut(id,token)
      .then((response) => {
        console.log(response)
        this.setState({
          user: {},
          cart: {}
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Routes
          user={this.state.user}
          cart={this.state.cart}
          handleSignIn={this.handleSignIn}
          handleSignUp={this.handleSignUp}
          handleChangePwd={this.handleChangePwd}
          handleLogOut={this.handleLogOut}
          token={this.state.user.token}/>
      </div>
    )
  }
}

export default Store;
