import React, {Component} from 'react';
// import { injectStripe,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   PostalCodeElement,
// } from 'react-stripe-elements';

import { connect } from 'react-redux';

import API from '../API';

var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

class CheckoutForm extends Component {
  constructor() {
    super()
    this.state = {
      stripe: null,
      card: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');

    script.async = true;
    script.src = 'https://js.stripe.com/v3';
    document.body.appendChild(script);

    let stripe = window.Stripe('pk_test_54gJjeqvMB18TplKh34AQioV');
    let elements = stripe.elements();
    let card = elements.create('card', {style: style});
    card.mount('#card-element');
    this.setState({
      stripe: stripe,
      card: card
    })

    card.addEventListener('change', function(event) {
      let displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();

    // this.props.stripe.createToken({name: 'Jenny Rosen'})
    //   .then((token) => this.props.stripe.createSource(token.card, {owner: { name: 'Jenny Rosen'}}))
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    this.state.stripe.createToken(this.state.card)
      .then((data) => API.checkout(data, this.props.user.token, this.props.user.email))
      .catch((err) => console.log(err))


  }

  render() {
    return(
      <div>
        <form id="payment-form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="card-element">
              Credit or debit card
            </label>
            <div id="card-element">
            </div>
            <div id="card-errors" role="alert"></div>
          </div>

          <button>Submit Payment</button>
        </form>
    </div>
    )
  }

  // render() {
  //   return (
  //         <form onSubmit={this.handleSubmit}>
	// 					<label>
  //             Name on Card
  //           </label>
  //           <label>
  //             Card number
  //             <CardNumberElement
  //               {...createOptions(this.props.fontSize)}
  //             />
  //           </label>
  //           <label>
  //             Expiration date
  //             <CardExpiryElement
  //               {...createOptions(this.props.fontSize)}
  //             />
  //           </label>
  //           <label>
  //             CVC
  //             <CardCVCElement
  //               {...createOptions(this.props.fontSize)}
  //             />
  //           </label>
  //           <label>
  //             Postal code
  //             <PostalCodeElement
  //               {...createOptions(this.props.fontSize)}
  //             />
  //           </label>
  //           <button>Pay</button>
  //         </form>
  //   );
  // }
}

// const createOptions = (fontSize) => {
//   return {
//     style: {
//       base: {
//         fontSize,
//         color: '#424770',
//         letterSpacing: '0.025em',
//         fontFamily: 'Source Code Pro, Menlo, monospace',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
//   };
// };

// export default injectStripe(CheckoutForm);

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(CheckoutForm);
