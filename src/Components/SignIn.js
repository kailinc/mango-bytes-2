import React, { Component } from 'react';
import { FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';

import API from '../API';
const store = require('../store')

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false
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
        store.user.id = response.data.user.id
        store.user.token = response.data.user.token
        store.user.coderName = response.data.user.coderName
      })
      .then(
        this.setState({
          loggedIn: true
        })
      )
      .catch((error) => {
        this.props.alert.error('Incorrect Username/Password.')
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
    )
  }
}

export default withAlert(SignIn);
