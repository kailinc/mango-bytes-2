import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AlertContainer from 'react-alert';
import createHistory from 'history/createBrowserHistory'

import API from '../API';
import Routes from './Routes';
import error from '../assets/error.png';
import success from '../assets/success.png';
import info from '../assets/info.png';

const history = createHistory()
const location = history.location

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

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = (message, status) => {
    this.msg.show(message, {
      time: 2000,
      type: status,
      icon: <img src={status}/>
    })
  }

  handleSignUp(data) {
    API.signUp(data)
      .then((response) => {
        this.msg.success('Yes! You have signed up for an account. Please login to continue.')
      })
      .then(()=> {
        history.push('/log-in')
      })
      .catch((error) => {
        this.msg.error('Sorry, there was a problem. Please retry again.')
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
          handleSignIn={this.handleSignIn}
          handleSignUp={this.handleSignUp}
          handleChangePwd={this.handleChangePwd}
          handleLogOut={this.handleLogOut}
          token={this.state.user.token}/>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    )
  }
}

export default Store;
