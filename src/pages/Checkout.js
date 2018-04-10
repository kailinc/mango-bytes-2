import React, { Component } from 'react';

import OrderSummary from '../Components/OrderSummary';
import ItemTable from '../Components/ItemTable';
import Shipping from '../Components/Shipping';
import Payment from '../Components/Payment';

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      stage: 0
    }

    this.advance = this.advance.bind(this);
    this.determineContent = this.determineContent.bind(this);
  }

  advance() {
    this.setState((prevState) => {
      return {stage: prevState.stage + 1}
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  determineContent() {
    switch(this.state.stage) {
      case 0:
        return <ItemTable stage={this.state.stage}/>;
        break;
      case 1:
        return <Shipping handleAdvance={() => this.advance()}/>
        break;
      case 2:
        return <Payment/>
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="store">
          {this.determineContent()}
          <OrderSummary stage={this.state.stage} handleCheckout={() =>this.advance()}/>
      </div>
    )
  }
}

export default Checkout;
