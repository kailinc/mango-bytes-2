import React, { Component } from 'react';
import { FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';

import API from '../API';
const store = require('../store');

class ChangePwd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      old: '',
      new: '',
      changedPwd: false
    }
    this.onChangePwd = this.onChangePwd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.redirectToHome = this.redirectToHome.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  onChangePwd(e) {
    e.preventDefault()
    const data = {
      passwords: this.state
    }
    const id = store.user.id
    const token = store.user.token
    API.changePassword(id, token, data)
      .then(() => {
        this.props.alert.success('Your password has been changed.')
      })
      .then(() => {
        this.setState({
          old: '',
          new: ''
        })
      })
      .then(() => {
        setTimeout(this.redirectToHome, 2000)
      })
      .catch((error) => {
        this.props.alert.error('There was a problem changing your password.')
      })
  }

  redirectToHome() {
    this.setState({
      changedPwd: true
    })
  }

  render(){
    if (this.state.changedPwd) {
      return(
        <Redirect to='/' />
      )
    }

    return(
      <Form horizontal onSubmit={this.onChangePwd}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Old Password
          </Col>
          <Col sm={10}>
            <input name="old" type="password" value={this.state.old} onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            New Password
          </Col>
          <Col sm={10}>
            <input name="new" type="password" value={this.state.new} onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default withAlert(ChangePwd);
