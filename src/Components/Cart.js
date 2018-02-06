import React, { Component } from 'react';

import OrderSummary from './OrderSummary';
import CartTable from './CartTable';

class Cart extends Component {
  render() {
    console.log('from Cart: ', this.props.cart)
    return (
      <div className="store">
        <OrderSummary />
        <CartTable />
      </div>
    )
  }
}

export default Cart;
