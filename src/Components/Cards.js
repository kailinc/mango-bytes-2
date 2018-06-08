import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import cartAPI from '../API/cart';
import userAPI from '../API/user';
import { updateAttr } from '../actions/user';

class Cards extends React.Component {
  constructor(props:Object) {
      super(props);
      this.state = {
          loading: true,
          stripeLoading: true,
          paid: false
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
              amount: this.props.cart.productFinal,
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
          allowRememberMe: false,
      });
      e.preventDefault();
  }

  handleToken(token) {
      let data = {
        charge: {
          stripeToken: null,
          email: this.props.user.email,
          shipping: this.props.shipping,
          description: "Charge for order on Mango Bytes 2",
          amount: this.props.cart.productFinal,
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
              isPaid: true,
              finalPrice: this.props.cart.productFinal
            }
          }
          cartAPI.update(this.props.cart.id, this.props.user.token, data)
            .then(() => {
              const powers = this.props.cart.items.filter((cur) => cur.category === 'superpowers')
              if (powers.length > 0) {
                for (let i = 0; i < powers.length; i++) {
                  let data = {
                    user: {
                      [powers[i].name]: true
                    }
                  }
                  console.log('this is data', data)
                  userAPI.update(this.props.user.id, this.props.user.token, data)
                    .then((response) => console.log('updated user power', response))
                    .catch((err) => console.log(err))
                }
              }
            })
            .then(() => {
              let data = {
                user: {
                  devCred: this.props.cart.devCred + this.props.user.devCred
                }
              }
              userAPI.update(this.props.user.id, this.props.user.token, data)
                .then(() => {
                  userAPI.showUser(this.props.user.id, this.props.user.token)
                    .then(response => {
                      this.props.dispatch(updateAttr(response.data.user))
                    })
                    .then(() => this.setState({ paid: true }))
                })
            })
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
      if (this.state.paid) {
        return(
          <Redirect to={{
            pathname: '/confirmation',
            state: {
              cartId: this.props.cart.id,
              attributes: this.props.cart.attributes,
              devCred: this.props.cart.devCred,
              items: this.props.cart.items
            }
          }}/>
        )
      }
      const { stripeLoading, loading } = this.state;
      return (
          <div>
              {(loading || stripeLoading)
                  ? <p></p>
                  : <button className="btn checkout-btn pay-btn" onClick={this.onStripeUpdate}>Pay with Credit/Debit Card</button>
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
