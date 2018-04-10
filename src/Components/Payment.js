import React, { Component } from 'react';

class Payment extends Component {
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
          <h3>Step 3. Payment</h3>
        </div>
        <div className="cart-table">
          <p>payment information and stuff</p>
          <form>
            <input/>
          </form>
        </div>
        <button>Place Order</button>
      </div>
    )
  }
}

export default Payment;
