import React, { Component } from 'react';

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
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
  render() {
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Shipping Information</h3>
        </div>
        <div className="cart-table">
          <h3>Delivery Method</h3>
          <label>Please allow 2-3 days for processing</label>
          <h3>Shipping Address</h3>
          <form>

            <div className="inputBox">
              <input type="text" className="inputField half" required/>
              <label className="inputLabel">FIRST NAME</label>
            </div>

          </form>

          <h3>Delivery Method</h3>
          <label>FedEx (3-5 Day Delivery)</label>
        </div>
        <button onClick={this.props.handleAdvance}>Payment</button>
      </div>
    )
  }
}

export default Shipping;
