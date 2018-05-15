import React, { Component } from 'react';

import { StripeProvider } from 'react-stripe-elements';

import OrderSummary from '../Components/OrderSummary';
import ItemTable from '../Components/ItemTable';
import Shipping from '../Components/Shipping';
import ForceLogin from '../Components/ForceLogin';
import Payment from '../Components/Payment';

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      stage: 0
    }

    this.advance = this.advance.bind(this);
    this.backward = this.backward.bind(this);
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

  backward() {
    this.setState((prevState) => {
      return { stage: prevState.stage - 1 }
    })
  }

  // determineContent() {
  //   switch(this.state.stage) {
  //     case 0:
  //       return <ItemTable stage={this.state.stage}/>;
  //     case 1:
  //       return <ForceLogin handleAdvance={() => this.advance()} handleBackward={() => this.backward()}/>
  //     case 2:
  //       return <Shipping handleAdvance={() => this.advance()} handleBackward={() => this.backward()}/>
  //     case 3:
  //       return (
  //         <StripeProvider apiKey="pk_test_54gJjeqvMB18TplKh34AQioV">
  //           <Payment handleBackward={() => this.backward()}/>
  //         </StripeProvider>)
  //     default:
  //       break;
  //   }
  // }
  determineContent() {
    switch(this.state.stage) {
      case 0:
        return <ItemTable stage={this.state.stage}/>;
      case 1:
        return <Shipping handleAdvance={() => this.advance()} handleBackward={() => this.backward()}/>
      case 2:
        return (
          <StripeProvider apiKey="pk_test_54gJjeqvMB18TplKh34AQioV">
            <Payment handleBackward={() => this.backward()}/>
          </StripeProvider>)
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
