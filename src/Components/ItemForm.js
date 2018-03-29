import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, addItem } from '../actions/cart';
import { itemExists, getQuantity } from '../helpers/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.reformatItem = this.reformatItem.bind(this)
  }

  reformatItem() {
    return {
      item_id: this.props.item.id,
      name: this.props.item.name,
      devCred: this.props.item.devCred,
      basePrice: this.props.item.basePrice,
      attributes: this.props.item.attributes,
      img: this.props.item.img,
      quantity: 0
    }
  }

  addOne() {
    let curItem = this.reformatItem();
    curItem.quantity = 1;
    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(curItem))
    } else if (itemExists(this.props.cart.items, curItem.item_id)) {
      this.props.dispatch(updateQuantity(curItem.item_id, 1))
    } else {
      this.props.dispatch(addItem(curItem))
    }
  }

  minusOne() {
    let curItem = this.reformatItem();
    if (this.props.cart.items.length > 0) {
      if (itemExists(this.props.cart.items, curItem.id)) {
        this.props.dispatch(updateQuantity(curItem.id, -1))
      }
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.addOne}>+</button>
        <p>{getQuantity(this.props.cart.items, this.props.item.id)}</p>
        <button onClick={this.minusOne}>-</button>
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
