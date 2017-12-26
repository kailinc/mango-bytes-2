import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';

class SignUp extends Component {
  handleSignUp(e) {
    e.preventDefault()

  }

  render(){
    return(
      <Form horizontal onSubmit={this.handleSignUp}>
        <FormGroup controlId="firstName">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="First Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="lastName">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Last Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="alias">
          <Col componentClass={ControlLabel} sm={2}>
            Alias
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Alias" />
          </Col>
        </FormGroup>

        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="pwd">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup controlId="pwdConfirm">
          <Col componentClass={ControlLabel} sm={2}>
            Password Confirmation
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password Confirmation" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default SignUp;
