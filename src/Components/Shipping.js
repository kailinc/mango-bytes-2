import React, { Component } from 'react';

import InputBox from './InputBox';

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
      zipCode: 0,
      country: '',
      phone: 0,
      email: ''
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
    })
    console.log("Shipping: value is ", value);
  }

  render() {
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Shipping Information</h3>
        </div>
        <div className="cart-table">
          <h3>Delivery Method</h3>
          <label>Please allow 2-3 days for processing</label>
          <hr></hr>
          <h3>Shipping Address</h3>
          <form className="form">
            <InputBox label="FIRST NAME" size="half" updateValue={this.updateValue} value={this.state.firstName} field="firstName"/>
            <InputBox label="LAST NAME" size="half" updateValue={this.updateValue} value={this.state.lastName} field="lastName"/>
            <InputBox label="STREET ADDRESS, PO BOX" size="full" updateValue={this.updateValue} value={this.state.address} field="address"/>
            <InputBox label="APARTMENT, SUITE, BUILDING, FLOOR (OPTIONAL)" size="full" updateValue={this.updateValue} value={this.state.apt} field="apt"/>
            <InputBox label="CITY/TOWN" size="half" updateValue={this.updateValue} value={this.state.city} field="city"/>
            <InputBox label="STATE" size="half" updateValue={this.updateValue} value={this.state.state} field="state"/>
            <InputBox label="ZIP CODE" size="half" updateValue={this.updateValue} value={this.state.zip} field="zip"/>
            <InputBox label="COUNTRY" size="full" updateValue={this.updateValue} value={this.state.country} field="country"/>

            <InputBox label="PHONE NUMBER" size="full" updateValue={this.updateValue} value={this.state.phone} field="phone"/>
            <InputBox label="EMAIL" size="full" updateValue={this.updateValue} value={this.state.email} field="email"/>
          </form>
          <hr></hr>
          <h3>Delivery Method</h3>
          <label>FedEx (3-5 Day Delivery)</label>
        </div>
        <button onClick={this.props.handleAdvance}>Payment</button>
      </div>
    )
  }
}

export default Shipping;
