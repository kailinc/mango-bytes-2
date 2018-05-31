import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, addItem, newAttributes, updateAttributes, updateId, updateDevCred, updateProductTotal } from '../actions/cart';
import { getQuantity } from '../helpers/cart';
import cartAPI from '../API/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)

    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.formatItem = this.formatItem.bind(this)
    this.formatAttributes = this.formatAttributes.bind(this)
    this.createCartAPI = this.createCartAPI.bind(this)
    this.updateCartAPI = this.updateCartAPI.bind(this)
  }

  formatItem() {
    return {
      item_id: this.props.item.id || this.props.item.item_id,
      name: this.props.item.name,
      devCred: this.props.item.devCred,
      basePrice: this.props.item.basePrice,
      attributes: this.props.item.attributes,
      img: this.props.item.img,
      quantity: 1
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

  createCartAPI (item) {
    if (this.props.user.token != null) {
      let data = {
        cart: {
          items: [item]
        }
      }
      cartAPI.create(this.props.user.token, data)
        .then((response) => this.props.dispatch(updateId(response.data.cart.id)))
        .catch((err) => console.log(err))
    }
  }

  updateCartAPI() {
    if (this.props.user.token) {
      let data = {
        cart: {
          items: this.props.cart.items
        }
      }
      cartAPI.update(this.props.cart.id, this.props.user.token, data)
        .then(() => {
          if (this.props.cart.items.length === 0) {
            cartAPI.destroy(this.props.cart.id, this.props.user.token)
              .then(() => this.props.dispatch(updateId("")))
              .catch((err) => console.log(err))
          }
        })
        .catch((err) => console.log(err))
    }
  }

  addOne() {
    let attributes = this.formatAttributes();
    let item = this.formatItem();
    let devCred = this.props.item.devCred;
    let productTotal = this.props.item.basePrice;

    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(item))
      this.props.dispatch(newAttributes(attributes))
      this.createCartAPI(item)
      this.props.handleSelect()
    } else {
      if (getQuantity(this.props.cart.items, item.item_id) > 0) {
        this.props.dispatch(updateQuantity(item.item_id, 1))
      } else {
        this.props.dispatch(addItem(item))
      }
      this.props.dispatch(updateAttributes(attributes, 1))
      this.updateCartAPI()
    }
    this.props.handleSelect()
    this.props.dispatch(updateDevCred(devCred))
    this.props.dispatch(updateProductTotal(productTotal))
  }

  minusOne() {
    let attributes = this.formatAttributes();
    let item = this.formatItem();
    let devCred = this.props.item.devCred * -1;

    if (this.props.cart.items.length > 0) {
      const quantity = getQuantity(this.props.cart.items, item.item_id)
      if (quantity > 0) {
        if (quantity === 1) {
          this.props.handleUnselect();
        }
        this.props.dispatch(updateQuantity(item.item_id, -1))
        this.props.dispatch(updateAttributes(attributes, -1))
        this.props.dispatch(updateDevCred(devCred))
        this.updateCartAPI()
      }
    }
  }

  render(){
    const item = this.formatItem();

    return(
      <div className='items'>
        <button onClick={this.addOne}>+</button>
        <p>{this.props.item.quantity || getQuantity(this.props.cart.items, item.item_id)}</p>
        <button onClick={this.minusOne}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps)(ItemForm);
