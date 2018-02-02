import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../API';
import UIMessage from './UIMessage';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      coderName: '',
      email: '',
      password: '',
      password_confirmation: '',
      signedUp: false,
      ui: {
        type: '',
        msg: '',
        display: false
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
    this.redirectToLogin = this.redirectToLogin.bind(this)
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  onSignUp(e) {
    e.preventDefault()
    if (this.state.password !== this.state.password_confirmation) {
      this.setState({
        ui: {
          type: 'error',
          msg: 'Sorry the passwords don\'t match. Please try again.',
          display: true
        }
      })
    } else {
      const data = {
        credentials: this.state
      }
      API.signUp(data)
        .then((response) => {
          this.setState({
            ui: {
              type: 'success',
              msg: 'Yes! You have signed up for an account. Please login to continue.',
              display: true
            }
          })
        })
        .then(() => {
          setTimeout(this.redirectToLogin, 2000)
        })
        .catch((error) => {
          this.setState({
            ui: {
              type: 'error',
              msg: 'This account is already taken. Please try again.',
              display: true
            }
          })
          console.log(error)
        })
      }
  }

  redirectToLogin() {
    this.setState({
      signedUp: true
    })
  }

  render(){
    if (this.state.signedUp) {
      return(
        <Redirect to='/log-in'/>
      )
    }

    return(
      <div>
        <div className='title'>
          <h1>Sign Up to Join the Team!</h1>
        </div>
        { this.state.ui.display ? <UIMessage type={this.state.ui.type}
                                            msg={this.state.ui.msg}
                                            unmountMe={this.handleChildUnmount} /> : null}
        {<p>{this.state.msg}</p>}
        <form className='sign-up-form' onSubmit={this.onSignUp}>
          <label>
            <input name='firstName' type="text" required value={this.state.firstName} onChange={this.handleInputChange}/>
            <div className="label-text">First Name</div>
          </label>
          <label>
            <input name='lastName' type="text" required value={this.state.lastName} onChange={this.handleInputChange}/>
            <div className="label-text">Last Name</div>
          </label>
          <label>
            <input name='coderName' type="text" required value={this.state.coderName} onChange={this.handleInputChange}/>
            <div className="label-text">Coder Name</div>
          </label>
          <label>
            <input name='email' type="email" required value={this.state.email} onChange={this.handleInputChange}/>
            <div className="label-text">Email</div>
          </label>
          <label>
            <input name="password" type='password' value={this.state.password} onChange={this.handleInputChange} required/>
            <div className="label-text">Password</div>
          </label>
          <label>
            <input name="password_confirmation" type='password' value={this.state.password_confirmation} onChange={this.handleInputChange} required/>
            <div className="label-text">Password Confirmation</div>
          </label>
          <button className='submit-button'>Submit</button>
        </form>
      </div>
      )
    }
  }

export default SignUp;
