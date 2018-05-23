import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBox from './InputBox';
import BackBtn from './BackBtn';
import Card from './Card';
import { newShipping } from '../actions/shipping';

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      apt: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
      email: ''
    }
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.user.token) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email
      })
    }
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      address: {
        line1: this.state.address,
        line2: this.state.apt,
        city: this.state.city,
        postal_code: this.state.zipCode,
        state: this.state.state,
        country: this.state.country
      },
      name: this.state.firstName + " " + this.state.lastName,
      phone: this.state.phone
    }
    this.props.dispatch(newShipping(data));
    this.props.handleAdvance();
  }

  render() {
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Shipping Information</h3>
        </div>
        <div className="cart-table">
          <BackBtn backward={this.props.handleBackward}/>
          <h3>Delivery Method</h3>
          <label>Please allow 2-3 days for processing</label>
          <hr></hr>
          <h3>Shipping Address</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <InputBox label="FIRST NAME" size="half" updateValue={this.updateValue} value={this.state.firstName} field="firstName" type="text"/>
            <InputBox label="LAST NAME" size="half" updateValue={this.updateValue} value={this.state.lastName} field="lastName" type="text"/>
            <InputBox label="STREET ADDRESS, PO BOX" size="full" updateValue={this.updateValue} value={this.state.address} field="address" type="text"/>
            <InputBox label="APARTMENT, SUITE, BUILDING, FLOOR" size="full" updateValue={this.updateValue} value={this.state.apt} field="apt" type="text"/>
            <InputBox label="CITY/TOWN" size="half" updateValue={this.updateValue} value={this.state.city} field="city" type="text"/>
            <InputBox label="STATE" size="half" updateValue={this.updateValue} value={this.state.state} field="state" type="text"/>
            <InputBox label="ZIP CODE" size="half" updateValue={this.updateValue} value={this.state.zip} field="zipCode" type="number"/>
            <InputBox label="COUNTRY" size="full" updateValue={this.updateValue} value={this.state.country} field="country" type="text"/>

            <InputBox label="PHONE NUMBER" size="full" updateValue={this.updateValue} value={this.state.phone} field="phone" type="number"/>
            <InputBox label="EMAIL" size="full" updateValue={this.updateValue} value={this.state.email} field="email" type="email"/>
            <button onSubmit={this.handleSubmit} type="submit" value="Submit">Submit</button>
          </form>
          <hr></hr>
          <h3>Delivery Method</h3>
          <label>FedEx (3-5 Day Delivery)</label>
          <Card/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Shipping);
