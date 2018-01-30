import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, addItem } from '../actions/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 0,
      item: this.props.item
    }
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }))
    const itemsArray = this.props.cart.items
    let cart
    if (itemsArray.length === 0) {
      cart = createCart(this.state.item)
      this.props.dispatch(newCart(cart))
    } else {
      for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].id === this.state.item.id) {
          itemsArray[i].quantity += 1
          this.props.dispatch(addItem(itemsArray))
        } else if ( i === itemsArray.length - 1 ) {
          let item = this.state.item
          item.quantity = 1
          let newCart = itemsArray.concat(item)
          this.props.dispatch(addItem(newCart))
        }
      }
    }
  }

  minus() {
    const itemsArray = this.props.cart.items
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }))
      for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].id === this.state.item.id) {
            itemsArray[i].quantity -= 1
            this.props.dispatch(addItem(itemsArray))
        }
      }
      // subtract quantity by 1
      // remove the item from the cart if the quantity is 0
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.add}>+</button>
        <p>{this.state.quantity}</p>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    cart: state.cart
  };
};

const createCart = function(item) {
  item.quantity = 1
  return [item]
}

export default connect(mapStateToProps)(ItemForm);
