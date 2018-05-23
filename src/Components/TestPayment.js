import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Cards from './Cards';
import BackBtn from './BackBtn';

class TestPayment extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      paymentSuccess: false
    }
    this.handlePayment = this.handlePayment.bind(this);
  }

  handlePayment() {
    this.setState({
      paymentSuccess: true
    })
  }

  render() {
    if (this.state.paymentSuccess) {
      return <Redirect to="/confirmation"/>
    }
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 3. Payment</h3>
        </div>
        <BackBtn backward={this.props.handleBackward}/>
        <div className="cart-table">
          <Cards/>
        </div>
      </div>
    )
  }
}

export default TestPayment;
