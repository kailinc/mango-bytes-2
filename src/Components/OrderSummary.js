import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTotal, convertToDollars } from '../helpers/cart';

class OrderSummary extends Component {
  constructor(props){
    super(props)
    this.state = {
      promoCode: '',
      promoValue: 0
    }
    this.submitPromo = this.submitPromo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({promoCode: e.target.value})
    console.log('promocode is now', this.state.promoCode)
  }

  submitPromo(e) {
    e.preventDefault();
    console.log('you are submitting a promo code', this.state.promoCode)

  }

  render() {
    const productTotal = getTotal(this.props.cart.items)
    const subTotal = productTotal - this.state.discountValue
    const taxes = subTotal * 0.0625
    const total = subTotal + taxes

    return (
      <div className="order-col">
        <div className="summary-content">
          <div className="summary-header">
            <h3>SUMMARY</h3>
          </div>
          <div className="summary-row">
            <p>ITEMS:</p>
            <p> {this.props.cart.items.length}</p>
          </div>
          <div className="summary-row">
            <p>GAINS:</p>
            <div>
              <p>JavaScript: <span className="increase-pts">+2</span></p>
              <p>JavaScript: <span className="increase-pts">+2</span></p>
            </div>
          </div>
          <div className="summary-row">
            <p>PRODUCT TOTAL:</p>
            <p>{convertToDollars(productTotal)}</p>
          </div>
          <div className="summary-row">
            <p>DELIVERY AND HANDLING:</p>
            <p><span className="increase-pts">FREE</span></p>
          </div>
          <div className="summary-row">
            <p>ESTIMATED TAXES:</p>
            <p>{convertToDollars(taxes)}</p>
          </div>
          <div className="summary-row">
            <p>DISCOUNTS:</p>
            <p>$0.00</p>
          </div>
          <div className="summary-row">
            <p>TOTAL:</p>
            <p>{convertToDollars(total)}</p>
          </div>
        <div className="summary-row">
          <form className="checkout-form" onSubmit={this.submitPromo}>
            <p className="checkout-info">PROMO CODES ARE CASE SENSITIVE</p>
            <input placeholder="PROMO CODE" value={this.state.promoCode} onChange={this.handleChange}/>
            <p className="checkout-info">Casing & hyphens must be exact</p>
            <button className="promo-btn">APPLY</button>
          </form>
        </div>
        <div className="summary-row">
          <button className="checkout-btn">CHECKOUT</button>
        </div>
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
