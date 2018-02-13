import React, { Component } from 'react';

import OrderSummary from '../Components/OrderSummary';
import CartTable from '../Components/CartTable';

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
