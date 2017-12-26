import React, { Component } from 'react';

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
    this.onSignUp = this.onSignUp.bind(this)
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
    const data = {
      credentials: this.state
    }
    this.props.handleSignUp(data)
  }

  render(){
    return(
      <form onSubmit={this.onSignUp}>
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
