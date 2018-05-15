import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import userAPI from '../API/user';
import UIMessage from '../Components/UIMessage';
import Form from '../Components/Form';

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

    this.updateValue = this.updateValue.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
    this.redirectToLogin = this.redirectToLogin.bind(this)
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
    })
  }

  onSignUp(e) {
    e.preventDefault()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
      userAPI.signUp(data)
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

    const fields = Object.keys(this.state).filter((cur) => cur != 'ui' && cur != 'signedUp').map((cur) => {
        return { label: cur, value: this.state[cur], size: 'half' }
    })

    return(
      <div>
        <div className='title'>
          <h1>Sign Up to Join the Team!</h1>
        </div>
        <Form fields={fields} updateValue={this.updateValue} uiType={this.state.ui.type} uiMsg={this.state.ui.msg} unmountMe={this.handleChildUnmount} onSubmit={this.onSignUp} uiDisplay={this.state.ui.display}/>
      </div>
      )
    }
  }

export default SignUp;
