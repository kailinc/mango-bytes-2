import React, {Component} from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
} from 'react-stripe-elements';

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

export default injectStripe(CheckoutForm);
