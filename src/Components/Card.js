import React from 'react';

export default class Cards extends React.Component {
  constructor(props:Object) {
      super(props);
      this.state = {
          loading: true,
          stripeLoading: true,
      };
            // onStripeUpdate must be bound or else clicking on button will produce error.
      this.onStripeUpdate = this.onStripeUpdate.bind(this);
      // binding loadStripe as a best practice, not doing so does not seem to cause error.
      this.loadStripe = this.loadStripe.bind(this);
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
              key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
              image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
              locale: 'auto',
              token: (token) => {
                  this.setState({ loading: true });
                  console.log('token is ', token)
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
          name: 'test',
          description: 'widget',
          panelLabel: 'Update Credit Card',
          allowRememberMe: false,
      });
      e.preventDefault();
  }

  render() {
      const { stripeLoading, loading } = this.state;
      return (
          <div>
              {(loading || stripeLoading)
                  ? <p></p>
                  : <button onClick={this.onStripeUpdate}>Pay with Stripe</button>
              }
          </div>
      );
  }
}
