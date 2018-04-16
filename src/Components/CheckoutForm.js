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

    this.props.stripe.createToken({name: 'Jenny Rosen'})
      .then((data) => API.checkout(data.token.id, this.props.user.token, this.props.user.email))
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
    user: state.user
  };
};

// export default injectStripe(CheckoutForm);
export default connect(mapStateToProps)(injectStripe(CheckoutForm));
