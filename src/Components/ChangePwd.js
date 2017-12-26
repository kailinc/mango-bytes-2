import React, { Component } from 'react';
import { FormGroup, Col, Form, ControlLabel, Button } from 'react-bootstrap';

class ChangePwd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      old: '',
      new: ''
    }
    this.onChangePwd = this.onChangePwd.bind(this)
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

  onChangePwd(e) {
    e.preventDefault()
    const data = {
      passwords: this.state
    }
    this.props.handleChangePwd(data)
  }

  render(){
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

export default ChangePwd;
