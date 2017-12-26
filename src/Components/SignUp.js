import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';

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
    fetch('http://localhost:4741/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        console.log('it is working')
        console.log(response)
        return
      }
      throw new Error (response)
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
    {/* // return(
    //   <Form horizontal onSubmit={this.handleSignUp}>
    //     <FormGroup>
    //       <Col componentClass={ControlLabel} sm={2}>
    //         First Name
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="text" placeholder="First Name" inputRef={(ref) => {this.input = ref}} />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup controlId="lastName">
    //       <Col componentClass={ControlLabel} sm={2}>
    //         Last Name
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="text" placeholder="Last Name" />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup controlId="alias">
    //       <Col componentClass={ControlLabel} sm={2}>
    //         Alias
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="text" placeholder="Alias" />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup controlId="email">
    //       <Col componentClass={ControlLabel} sm={2}>
    //         Email
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="email" placeholder="Email" />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup controlId="pwd">
    //       <Col componentClass={ControlLabel} sm={2}>
    //         Password
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="password" placeholder="Password" />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup controlId="pwdConfirm">
    //       <Col componentClass={ControlLabel} sm={2}>
    //         Password Confirmation
    //       </Col>
    //       <Col sm={10}>
    //         <FormControl type="password" placeholder="Password Confirmation" />
    //       </Col>
    //     </FormGroup>
    //
    //     <FormGroup>
    //       <Col smOffset={2} sm={10}>
    //         <Button type="submit">
    //           Sign in
    //         </Button>
    //       </Col>
    //     </FormGroup>
    //   </Form>
    // ) */}

export default SignUp;
