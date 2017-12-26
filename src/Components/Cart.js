import React, { Component } from 'react';

class Cart extends Component {
  render() {
    console.log('from Cart: ', this.props.cart)
    return (
      <div>
        <h1>This is Cart</h1>
      </div>
    )
  }
}

export default Cart;
