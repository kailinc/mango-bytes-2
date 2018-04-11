import React, { Component } from 'react';

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Shipping Information</h3>
        </div>
        <div className="cart-table">
          <h3>Delivery Method</h3>
          <p>Please allow 2-3 days for processing</p>
          <h3>Shipping Address</h3>
          <form>
            <p>First Name</p>
            <input/>
            <p>Last Name</p>
            <input/>
            <p>Street Address, PO Box</p>
            <input/>
            <p>City/Town</p>
            <input/>
            <p>State</p>
            <input/>
            <p>Zip Code</p>
            <input/>
            <p>Country</p>
            <input/>

            <p>Phone Number</p>
            <input/>
            <p>Email</p>

          </form>

          <h3>Delivery Method</h3>
          <p>FedEx (3-5 Day Delivery)</p>
        </div>
        <button onClick={this.props.handleAdvance}>Payment</button>
      </div>
    )
  }
}

export default Shipping;
