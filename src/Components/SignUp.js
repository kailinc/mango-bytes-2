import React, { Component } from 'react';
import { Modal, Form, FormGroup, ControlLabel, Col, Button } from 'react-bootstrap';
import AlertContainer from 'react-alert';

import API from '../API';

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
      showModal: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
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

  onSignUp(e) {
    e.preventDefault()
    if (this.state.password !== this.state.password_confirmation) {
      this.msg.error('Sorry the passwords don\'t match. Please try again.')
    } else {
      const data = {
        credentials: this.state
      }
      API.signUp(data)
        .then((response) => {
          this.msg.success('Yes! You have signed up for an account. Please login to continue.')
        })
        .catch((error) => {
          this.msg.error('Sorry, there was a problem. Please retry again.')
          console.log(error)
        })
      }
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  render(){
    return(
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal onSubmit={this.onSignUp}>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    First Name
                  </Col>
                  <Col sm={10}>
                    <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                  </Col>
                  <Col sm={10}>
                    <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Coder Name
                  </Col>
                  <Col sm={10}>
                    <input name="coderName" type="text" value={this.state.coderName} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password Confirmation
                  </Col>
                  <Col sm={10}>
                    <input name="password_confirmation" type="password" value={this.state.password_confirmation} onChange={this.handleInputChange} required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign up
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
      )
    }
  }
export default SignUp;
