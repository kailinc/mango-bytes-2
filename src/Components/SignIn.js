import React, { Component } from 'react';
import { FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';

import API from '../API';
const store = require('../store')

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
    this.onSignIn = this.onSignIn.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.close = this.close.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  onSignIn(e) {
    e.preventDefault()
    const data = {
      credentials: this.state
    }
    API.signIn(data)
      .then((response) => {
        store.user.id = response.data.user.id
        store.user.token = response.data.user.token
        store.user.coderName = response.data.user.coderName
      })
      .then(() => {
        this.setState({
          loggedIn: true
        })
      })
      .catch((error) => {
        this.props.alert.error('Incorrect username/password.')
      })
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  render(){
    if (this.state.loggedIn) {
      return(
        <Redirect to='/' />
      )
    }

    return(
      <form onSubmit={this.onSignIn}>
        <label>
          <input name='email' type="email" required value={this.state.email} onChange={this.handleInputChange}/>
          <div class="label-text">Email</div>
        </label>
        <label>
          <input name="password" type='password' value={this.state.password} onChange={this.handleInputChange} required/>
          <div class="label-text">Password</div>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default withAlert(SignIn);
