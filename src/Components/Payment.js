// import React, { Component } from 'react';
//
// import { Redirect } from 'react-router-dom';
// import { Elements } from 'react-stripe-elements';
// import InjectedCheckoutForm from './CheckoutForm';
// import BackBtn from './BackBtn';
//
// class Payment extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       paymentSuccess: false
//     }
//     this.handlePayment = this.handlePayment.bind(this);
//   }
//
//   handlePayment() {
//     this.setState({
//       paymentSuccess: true
//     })
//   }
//
//   render() {
//     if (this.state.paymentSuccess) {
//       return <Redirect to="/confirmation"/>
//     }
//     return (
//       <div className="cart-col">
//         <div className="cart-header">
//           <h3>Step 3. Payment</h3>
//         </div>
//         <BackBtn backward={this.props.handleBackward}/>
//         <div className="cart-table">
//           <Elements>
//             <InjectedCheckoutForm fontSize="18px"/>
//           </Elements>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Payment;
