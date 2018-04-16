import React, {Component} from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
} from 'react-stripe-elements';

import { connect } from 'react-redux';

import API from '../API';

class CheckoutForm extends Component {
  constructor() {
    super()
    this.state = {
      stripe: null,
      card: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // check login
    // if logged in, diff order of api calls

    // member checkout
    // may already have source and customer for stripe
    // if have source for stripe,  use that stripe make charge
    // if don't have source, customer on stripe
    // create token, create custoemr, create charge
    // after charge, update cart, user

    // guest checkout
    // make token, send to back end
    // back end, create customer, charge
    // after charge, redirect to confirmation page


    let name = this.props.shipping.name
    let token = this.props.user.token
    let email = this.props.user.email
    let invoice = 123
    let shipping = this.props.shipping
    let description = "Charge for Cart on Mango Bytes 2"
    let amount = 999
    let currency = "usd"

    this.props.stripe.createToken({name: name})
      .then((response) => API.checkout(response.token.id, token, email, invoice, shipping, description, amount, currency))
      .catch((err) => console.log(err));

  }

  render() {
    return (
          <form onSubmit={this.handleSubmit}>
						<label>
              Name on Card
            </label>
            <label>
              Card number
              <CardNumberElement
                {...createOptions(this.props.fontSize)}
              />
            </label>
            <label>
              Expiration date
              <CardExpiryElement
                {...createOptions(this.props.fontSize)}
              />
            </label>
            <label>
              CVC
              <CardCVCElement
                {...createOptions(this.props.fontSize)}
              />
            </label>
            <label>
              Postal code
              <PostalCodeElement
                {...createOptions(this.props.fontSize)}
              />
            </label>
            <button>Pay</button>
          </form>
    );
  }
}

const createOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    cart: state.cart,
    shipping: state.shipping
  };
};

export default connect(mapStateToProps)(injectStripe(CheckoutForm));
