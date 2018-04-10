import React, { Component } from 'react';

import OrderSummary from '../Components/OrderSummary';
import ItemTable from '../Components/ItemTable';

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      stage: 0
    }
    this.advance = this.advance.bind(this);

  }

  advance() {
    this.setState((prevState) => {
      return {stage: prevState.stage + 1}
    })
  }

  render() {

    return (
      <div className="store">
          <ItemTable stage={this.state.stage}/>
          <OrderSummary stage={this.state.stage} handleCheckout={() =>this.advance()}/>
      </div>
    )
  }
}

export default Checkout;
