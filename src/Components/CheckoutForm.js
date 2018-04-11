import React, {Component} from 'react';
import { injectStripe } from 'react-stripe-elements';

import CardSection from './CardSection';

class CheckoutForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
