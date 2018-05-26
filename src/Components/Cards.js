import React from 'react';

import { connect } from 'react-redux';

import cartAPI from '../API/cart';
import userAPI from '../API/user';
import { updateAttr } from '../actions/user';
import { clearCart, clearAttributes, updateId } from '../actions/cart';


class Cards extends React.Component {
  constructor(props:Object) {
      super(props);
      this.state = {
          loading: true,
          stripeLoading: true,
      };

      this.onStripeUpdate = this.onStripeUpdate.bind(this);
      this.loadStripe = this.loadStripe.bind(this);
      this.handleToken = this.handleToken.bind(this);
  }

  loadStripe(onload:Function) {
      if(! window.StripeCheckout) {
          const script = document.createElement('script');
          script.onload = function () {
              console.info("Stripe script loaded");
              onload();
          };
          script.src = 'https://checkout.stripe.com/checkout.js';
          document.head.appendChild(script);
      } else {
          onload();
      }
  }

  componentDidMount() {
      this.loadStripe(() => {
          this.stripehandler = window.StripeCheckout.configure({
              key: 'pk_test_54gJjeqvMB18TplKh34AQioV',
              image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3900421.jpg',
              locale: 'auto',
              amount: 1234,
              token: (token) => {
                  this.setState({ loading: true });
                  this.handleToken(token);
              }
          });

          this.setState({
              stripeLoading: false,
              // loading needs to be explicitly set false so component will render in 'loaded' state.
              loading: false,
          });
      });
  }

  componentWillUnmount() {
      if(this.stripehandler) {
          this.stripehandler.close();
      }
  }

  onStripeUpdate(e:Object) {
      this.stripehandler.open({
          name: 'Mango Bytes 2.0 Order',
          description: 'Gains for the Brain',
          panelLabel: 'Pay',
          email: '1@1',
          allowRememberMe: false,
      });
      e.preventDefault();
  }

  handleToken(token) {
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
    //  let amount = this.props.cart.cost

    data.charge.stripeToken = token.id

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
      .catch((err) => console.log(err));
  }

  render() {
      const { stripeLoading, loading } = this.state;
      return (
          <div>
              {(loading || stripeLoading)
                  ? <p></p>
                  : <button onClick={this.onStripeUpdate}>Pay with Credit/Debit Card</button>
              }
          </div>
      );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    cart: state.cart,
    shipping: state.shipping
  };
};

export default connect(mapStateToProps)(Cards)
