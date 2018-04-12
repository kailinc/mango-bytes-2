import React, { Component } from 'react';

import InputBox from './InputBox';

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.addTouchedClass = this.addTouchedClass.bind(this);
  }

  // render() {
  //   return (
  //     <div className="cart-col">
  //       <div className="cart-header">
  //         <h3>Step 2. Shipping Information</h3>
  //       </div>
  //       <div className="cart-table">
  //         <h3>Delivery Method</h3>
  //         <label>Please allow 2-3 days for processing</label>
  //         <h3>Shipping Address</h3>
  //         <form>
  //           <div>
  //             <input/>
  //             <label>First Name</label>
  //           </div>
  //           <label>Last Name</label>
  //           <input/>
  //           <label>Street Address, PO Box</label>
  //           <input/>
  //           <label>City/Town</label>
  //           <input/>
  //           <label>State</label>
  //           <input/>
  //           <label>Zip Code</label>
  //           <input/>
  //           <label>Country</label>
  //           <input/>
  //
  //           <label>Phone Number</label>
  //           <input/>
  //           <label>Email</label>
  //
  //         </form>
  //
  //         <h3>Delivery Method</h3>
  //         <label>FedEx (3-5 Day Delivery)</label>
  //       </div>
  //       <button onClick={this.props.handleAdvance}>Payment</button>
  //     </div>
  //   )
  // }

  addTouchedClass() {
    console.log("input is clicked");
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
            <InputBox label="FIRST NAME" size="half"/>
            <InputBox label="LAST NAME" size="half"/>
            <InputBox label="STREET ADDRESS, PO BOX" size="full"/>
            <InputBox label="APARTMENT, SUITE, BUILDING, FLOOR (OPTIONAL)" size="full"/>
            <InputBox label="CITY/TOWN" size="half"/>
            <InputBox label="STATE" size="half"/>
            <InputBox label="ZIP CODE" size="half"/>
            <InputBox label="COUNTRY" size="full"/>

            <InputBox label="PHONE NUMBER" size="full"/>
            <InputBox label="EMAIL" size="full"/>
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
