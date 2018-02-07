import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutItem from './CheckoutItem';

class CartTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.cart.items
    }
  }

  render() {
    const items = this.state.items.map((item, i)=> <CheckoutItem key={i} item={item}/>)
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
          <h3>YOUR BAG ({this.state.items.length})</h3>
        </div>
        <div className="cart-table">
          {this.state.items.length > 0 ? items : emptyMsg }
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
