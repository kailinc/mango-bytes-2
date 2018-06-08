import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertToDollars } from '../helpers/cart';
import { updateProductFinal } from '../actions/cart';

const dotenv = require('dotenv')

class OrderSummary extends Component {
  constructor(props){
    super(props)
    this.state = {
      promoCode: '',
      promoValue: 0,
    }
    this.submitPromo = this.submitPromo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleChange(e) {
    this.setState({promoCode: e.target.value})
  }

  handleCheckout() {
    if (this.props.cart.items.length > 0) {
      const total = this.props.cart.productTotal * 1.0625
      const productFinal = total - this.state.promoValue >= 0 ? total - this.state.promoValue : 0
      this.props.dispatch(updateProductFinal(productFinal));
      this.props.handleCheckout();
    }
  }

  submitPromo(e) {
    e.preventDefault();
    if ( this.state.promoCode === process.env.REACT_APP_PROMO_CODE) {
      this.setState({
        promoValue: 10
      })
    }
  }

  render() {
    const taxes = this.props.cart.productTotal * 0.0625
    const total = this.props.cart.productTotal + taxes
    const afterDiscount = total - this.state.promoValue >= 0 ? total - this.state.promoValue : 0
    const discountValue = total - this.state.promoValue >= 0 ? this.state.promoValue : total
    return (
      <div className="order-col">
        <div className="summary-content">
          <div className="summary-header">
            <h3>SUMMARY</h3>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">ITEMS:</p>
            <p className="summaryText"> {this.props.cart.items.length}</p>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">GAINS:</p>
            <div>
              {this.props.cart.devCred > 0 ? <p>Dev Cred: <span className="increase-pts checkout-green">+{this.props.cart.devCred}</span></p> : <p></p>}
              {Object.keys(this.props.cart.attributes).map((key, index) => <p key={index}>{key}: <span className="increase-pts checkout-green">+{this.props.cart.attributes[key]}</span></p>)}
            </div>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">Super Powers:</p>
            <div>
              {this.props.cart.items.filter((cur) => cur.category === 'superpowers').map((cur, index) => <li key={index} className="increase-pts checkout-green powerList">{cur.name}</li>) }
            </div>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">PRODUCT TOTAL:</p>
            <p className="summaryText">{convertToDollars(this.props.cart.productTotal)}</p>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">DELIVERY AND HANDLING:</p>
            <p><span className="checkout-green">FREE</span></p>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">ESTIMATED TAXES:</p>
            <p className="summaryText" >{convertToDollars(taxes)}</p>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">DISCOUNTS:</p>
            <p className="summaryText">{convertToDollars(discountValue)}</p>
          </div>
          <div className="summary-row">
            <p className="summaryLabel">TOTAL:</p>
            <p className="summaryText">{convertToDollars(afterDiscount)}</p>
          </div>
        {
          this.props.stage === 0 ? <div><div className="summary-row">
            <form className="checkout-form" onSubmit={this.submitPromo}>
              <p className="checkout-info">PROMO CODES ARE CASE SENSITIVE</p>
              <input placeholder="PROMO CODE" value={this.state.promoCode} onChange={this.handleChange}/>
              <p className="checkout-info">Casing & hyphens must be exact</p>
              <button className="promo-btn btn" onSubmit={this.submitPromo}>APPLY</button>
            </form>
          </div>
          <div className="summary-row">
            <button className="checkout-btn btn" onClick={this.handleCheckout}>CHECKOUT</button>
          </div></div> : <p></p>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(OrderSummary);
