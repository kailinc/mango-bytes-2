import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/user';

import API from '../API';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      errorMsg: ''
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
          errorMsg: 'Incorrect username/password.'
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
          {<p className='errorMsg'>{this.state.errorMsg}</p>}
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
