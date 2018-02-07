import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CartTable extends Component {
  render() {
    return (
      <div className="cart-table">
        <div>
          <Link to='/all'>Continue Shopping</Link>
          <h3>Your Bag</h3>
        </div>
        <div>

        </div>
        This is Cart Table
      </div>
    )
  }
}

export default CartTable;
