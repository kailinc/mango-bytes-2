import React, {Component} from 'react';
import { injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
} from 'react-stripe-elements';

import { connect } from 'react-redux';

import cartAPI from '../API/cart';
import userAPI from '../API/user';
import { updateAttr } from '../actions/user';
import { clearCart, clearAttributes, updateId } from '../actions/cart';

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
    let data = {
      charge: {
        stripeToken: null,
        email: this.props.user.email,
        shipping: this.props.shipping,
        description: "Charge for order on Mango Bytes 2",
        amount: 999,
        currency: "usd",
        userId: this.props.user.id,
        cartId: this.props.cart.id
      }
    }
    // let amount = this.props.cart.cost

    this.props.stripe.createToken({name: name})
      .then((response) =>  {
        data.charge.stripeToken = response.token.id
        cartAPI.checkout(this.props.user.token, data)
          .then(() => {
            let data = {
              user: {}
            }
            Object.keys(this.props.cart.attributes).forEach((cur) => {
              data.user[cur] = this.props.cart.attributes[cur] + this.props.user[cur]
            })
            return data
          })
          .then((data) => {
            userAPI.update(this.props.user.id, this.props.user.token, data)
            .then(() => {
              let data = {
                cart: {
                  isPaid: true
                }
              }
              cartAPI.update(this.props.cart.id, this.props.user.token, data)
                .then(() => {
                  userAPI.showUser(this.props.user.id, this.props.user.token)
                    .then(response => this.props.dispatch(updateAttr(response.data.user)))
                })
                .then(() => this.props.dispatch(clearCart()))
                .then(() => this.props.dispatch(clearAttributes()))
                .then(() => this.props.dispatch(updateId('')))
            })
          })
      })
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
