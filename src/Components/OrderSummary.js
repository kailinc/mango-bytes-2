import React, { Component } from 'react';

import { connect } from 'react-redux';

class OrderSummary extends Component {
  constructur(props) {
    this.state = {
      cart: this.props.cart
    }
  }
  render() {
    return (
      <div className="order-col">
        <div className="summary-content">
          <div className="summary-header">
            <h3>SUMMARY</h3>
          </div>
          <div className="summary-row">
            <p>ITEMS:</p>
            <p> {this.props.cart.items.length}</p>
          </div>
          <div className="summary-row">
            <p>GAINS:</p>
            <div>
              <p>JavaScript: <span className="increase-pts">+2</span></p>
              <p>JavaScript: <span className="increase-pts">+2</span></p>
            </div>
          </div>
          <div className="summary-row">
            <p>PRODUCT TOTAL:</p>
            <p>$0.00</p>
          </div>
          <div className="summary-row">
            <p>DELIVERY AND HANDLING:</p>
            <p><span className="increase-pts">FREE</span></p>
          </div>
          <div className="summary-row">
            <p>ESTIMATED TAXES:</p>
            <p>$0.00</p>
          </div>
          <div className="summary-row">
            <p>TOTAL:</p>
            <p>$0.00</p>
          </div>
        <div className="summary-row">
          <form>
            <label>COUPON CODE</label>
            <input/>
            <button>APPLY</button>
          </form>
        </div>
        <div className="summary-row">
          <button className="checkout-btn">CHECKOUT</button>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(OrderSummary);
