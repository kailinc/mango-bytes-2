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
          <div className="summary-row">
            <h3>Summary</h3>
          </div>
          <div className="summary-row">
            <h5>Items: {this.props.cart.items.length}</h5>
          </div>
          <div className="summary-row">
            <h5>Product Total:</h5>
          </div>
          <div className="summary-row">
            <h5>Delivery: Free</h5>
          </div>
          <div className="summary-row">
            <h5>Estimated Taxes: </h5>
          </div>
          <div className="summary-row">
            <h5>Total: </h5>
          </div>
        <div className="summary-row">
          <form>
            <label>Coupon Code</label>
            <input/>
          </form>
        </div>
        <div className="summary-row">
          <button>Checkout</button>
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
