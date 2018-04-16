import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import { connect } from 'react-redux';
import InjectedCheckoutForm from './CheckoutForm';

class Payment extends Component {
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
        <div className="cart-table">
          <Elements>
            <InjectedCheckoutForm fontSize="18px" userToken={this.props.user.token} userEmail={this.props.user.email}/>
          </Elements>
        </div>
        <button onClick={this.handlePayment}>Place Order</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Payment);
