import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, FormGroup, Col, Form, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import API from '../API.js';

class ChangePwd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      signedIn: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      credentials: this.state
    }
    API.signIn(data)
      .then((response) => {
        this.setState({
          signedIn: true
        })
        this.props.handleSignIn(response.data.user)
      })
      .catch((error) => {
        this.setState({
          signedIn: false
        })
        console.log(error)
      })
  }
  render(){
    if (this.state.signedIn) {
      return <Redirect to='/'/>
    }
    return(
      <Form horizontal onSubmit={this.handleSubmit}>
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

export default ChangePwd;
