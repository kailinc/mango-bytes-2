import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CartTable extends Component {
  render() {
    return (
      <div className="cart-table">
        <div className="cart-header">
          <p><Link to='/all'>Continue Shopping</Link>
          <br></br>
            <span>YOUR BAG</span>
            <br></br>
            Mango-Bytes gives you free shipping and no hassle returns on every order.
          </p>
        </div>
        <div>

        </div>
        This is Cart Table
      </div>
    )
  }
}

export default CartTable;
