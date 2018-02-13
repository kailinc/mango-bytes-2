import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutItem from './CheckoutItem';
import { clearCart } from '../actions/cart';

class CartTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: this.props.items,
      currentStage: 0
    }
    this.clearCart = this.clearCart.bind(this);
  }

  clearCart() {
    this.props.dispatch(clearCart());
  }

  render() {
    const items = this.props.cart.items.map((item, i)=> <CheckoutItem key={i} item={item}/>)
    const label = <div className='table-header'><h4>Product</h4><h4>Description</h4><h4>Price</h4><h4>Quantity</h4><h4>Total</h4></div>
    const itemsList = <div>{label}{items}<button onClick={this.clearCart}>Clear Cart</button></div>
    const emptyMsg = <p> <span>There are no items in your cart.</span><br></br>If you have an account with us, please login to see items you previously added.</p>
    return (
      <div className="cart-col">
        <div className="cart-header bold">
          <p><Link to='/all'>Continue Shopping</Link>
          <br></br>
            <span>YOUR BAG</span>
            <br></br>
            Mango-Bytes gives you free shipping and no hassle returns on every order.
          </p>
        </div>
        <div className="cart-header">
          <h3>Step 1. Review Your Order</h3>
        </div>
        <div className="cart-table">
          {this.props.cart.items.length > 0 ? itemsList : emptyMsg }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartTable);
