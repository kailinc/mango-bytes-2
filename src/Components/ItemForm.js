import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, clearCart, addItem } from '../actions/cart';
import { itemExists, getQuantity } from '../helpers/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    let curItem = {
      id: this.props.item.id,
      name: this.props.item.name,
      devCred: this.props.item.devCred,
      basePrice: this.props.item.basePrice,
      attributes: this.props.item.attributes,
      img: this.props.item.img,
      quantity: 1
    }
    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(curItem))
    } else if (itemExists(this.props.cart.items, curItem.id)) {
      this.props.dispatch(updateQuantity(curItem.id, 1))
    } else {
      this.props.dispatch(addItem(curItem))
    }
  }

  minus() {
    let curItem = {
      id: this.props.item.id,
      name: this.props.item.name,
      devCred: this.props.item.devCred,
      basePrice: this.props.item.basePrice,
      attributes: this.props.item.attributes,
      img: this.props.item.img,
      quantity: -1
    }
    if (this.props.cart.items.length > 0) {
      if (itemExists(this.props.cart.items, curItem.id)) {
        this.props.dispatch(updateQuantity(curItem.id, -1))
      }
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.add}>+</button>
        <p>{this.props.item.quantity ? this.props.item.quantity : getQuantity(this.props.cart.items, this.props.item.id)}</p>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ItemForm);
