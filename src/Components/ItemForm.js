import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, clearCart, addItem } from '../actions/cart';
import { itemExists, getQuantity } from '../helpers/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: getQuantity(this.props.cart.items, this.props.item.id),
      item: this.props.item
    }
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    // this.props.dispatch(clearCart())
    this.setState((prevState) => {
      quantity: prevState.quantity += 1
    })
    let curItem = {
      id: this.state.item.id,
      name: this.state.item.name,
      devCred: this.state.item.devCred,
      basePrice: this.state.item.basePrice,
      attributes: this.state.item.attributes,
      img: this.state.item.img,
      quantity: 1
    }
    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(curItem))
    } else if (itemExists(this.props.cart.items, curItem.id)) {
      this.props.dispatch(updateQuantity(curItem.id, curItem.quantity))
    } else {
      this.props.dispatch(addItem(curItem))
    }
  }

  minus() {
    this.setState((prevState) => {
      quantity: prevState.quantity -= 1
    })
    let curItem = {
      id: this.state.item.id,
      name: this.state.item.name,
      devCred: this.state.item.devCred,
      basePrice: this.state.item.basePrice,
      attributes: this.state.item.attributes,
      img: this.state.item.img,
      quantity: -1
    }
    if (this.props.cart.items.length > 0) {
      if (itemExists(this.props.cart.items, curItem.id)) {
        this.props.dispatch(updateQuantity(curItem.id, curItem.quantity))
      }
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

export default connect(mapStateToProps)(ItemForm);
