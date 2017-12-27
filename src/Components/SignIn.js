import React, { Component } from 'react';
import { FormGroup, Col, Form, ControlLabel, Button, Modal } from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showModal: true
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
    this.props.handleSignIn(data)
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  render(){
    return(
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.onSignIn}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default SignIn;
