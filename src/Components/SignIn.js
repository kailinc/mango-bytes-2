import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/user';

import API from '../API';
import UIMessage from './UIMessage';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      ui: {
        msg: 'hehehehehehe',
        type: 'success',
        display: true
      }
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
        this.props.dispatch(signIn(response.data.user))
      })
      .then(() => {
        this.setState({
          loggedIn: true
        })
      })
      .catch((error) => {
        this.setState({
          ui: {
            msg: "Incorrect email and passoword.",
            type: "error",
            display: true
          }
        })
        console.log(error)
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
      <div>
        <div className='title'>
          <h1>Welcome Back!</h1>
        </div>
        <form onSubmit={this.onSignIn}>
          { this.state.ui.display &&<UIMessage type={this.state.ui.type} msg={this.state.ui.msg}/>}
          <label>
            <input name='email' type="email" required value={this.state.email} onChange={this.handleInputChange}/>
            <div className="label-text">Email</div>
          </label>
          <label>
            <input name="password" type='password' value={this.state.password} onChange={this.handleInputChange} required/>
            <div className="label-text">Password</div>
          </label>
          <button className='submit-button' >Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(SignIn);
