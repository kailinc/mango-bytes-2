import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, addItem, newAttributes, updateAttributes, addAttributes } from '../actions/cart';
import { itemExists, getQuantity, seperateAttr } from '../helpers/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.formatItem = this.formatItem.bind(this)
    this.formatAttributes = this.formatAttributes.bind(this)
  }

  formatItem() {
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

  formatAttributes() {
    let attributes = this.props.item.attributes;
    let formatted = {}
    for (let i = 0; i < attributes.length; i++) {
      formatted[attributes[i].name] = attributes[i].exp
    }
    return formatted;

  }

  addOne() {
    let curItem = this.formatItem();
    curItem.quantity = 1;
    let attributes = this.formatAttributes();

    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(curItem))
      this.props.dispatch(newAttributes(attributes))
    } else if (itemExists(this.props.cart.items, curItem.item_id)) {
      this.props.dispatch(updateQuantity(curItem.item_id, 1))
      this.props.dispatch(updateAttributes(attributes, 1))
    } else {
      this.props.dispatch(addItem(curItem))
      this.props.dispatch(updateAttributes(attributes, 1));
    }
  }

  minusOne() {
    let curItem = this.formatItem();
    let attributes = this.formatAttributes();

    if (this.props.cart.items.length > 0) {
      if (itemExists(this.props.cart.items, curItem.item_id)) {
        this.props.dispatch(updateQuantity(curItem.item_id, -1))
        this.props.dispatch(updateAttributes(attributes, -1))
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
