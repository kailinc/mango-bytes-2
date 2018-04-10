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
          <p>fill out some information</p>
          <form>
            <input/>
          </form>
        </div>
      </div>
    )
  }
}

export default Shipping;
