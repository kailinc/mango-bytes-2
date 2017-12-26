import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';
import API from '../API'
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      coderName: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSignUp(e) {
    e.preventDefault()
    const data = {
      credentials: this.state
    }
    API.signUp(data)
      .then((response) => console.log('this is response ', response))
      .catch(() => {
      window.AppNotify("Something went wrong please try again.")
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSignUp}>
        <label>First Name</label>
        <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}/>

        <label>Last Name</label>
        <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}/>

        <label>Coder Name</label>
        <input name="coderName" type="text" value={this.state.coderName} onChange={this.handleInputChange}/>

        <label>Email</label>
        <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>

        <label>Password</label>
        <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>

        <label>Password Confirmation</label>
        <input name="password_confirmation" type="password" value={this.state.password_confirmation} onChange={this.handleInputChange}/>

        <button>Sign Up!</button>
      </form>
      )
    }
  }
export default SignUp;
