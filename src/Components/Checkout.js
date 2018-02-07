import React, { Component } from 'react';

import OrderSummary from './OrderSummary';
import CartTable from './CartTable';

class Checkout extends Component {
  render() {
    return (
      <div className="store">
          <CartTable/>
          <OrderSummary />
      </div>
    )
  }
}

export default Checkout;
