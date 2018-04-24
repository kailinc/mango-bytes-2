import React, {Component} from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
} from 'react-stripe-elements';

import { connect } from 'react-redux';

import cartAPI from '../API/cart';

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

    let name = this.props.shipping.name
    let token = this.props.user.token
    let email = this.props.user.email
    let shipping = this.props.shipping
    let description = "Charge for Cart on Mango Bytes 2"
    let amount = 999
    // let amount = this.props.cart.cost
    let currency = "usd"
    let userId = this.props.user.id
    let cartId = this.props.cart.id

    this.props.stripe.createToken({name: name})
      .then((response) => cartAPI.checkout(response.token.id, token, email, shipping, description, amount, currency, userId, cartId))
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
            <button>Place Order</button>
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
