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
        <div className="summary">
          <h3>Summary</h3>
          <h5>Items: {this.props.cart.items.length}</h5>
          <h5>Product Total:</h5>
          <h5>Delivery: Free</h5>
          <h5>Estimated Taxes: </h5>
          <h5>Total: </h5>
          <form>
            <label>Coupon Code</label>
            <input/>
          </form>
          <button>Checkout</button>
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
