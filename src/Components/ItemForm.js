import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, addItem, increaseQuantity } from '../actions/cart';

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
    // create cart if there is nothing in it with an item
    let curItem = {
      id: this.state.item.id,
      name: this.state.item.name,
      devCred: this.state.item.devCred,
      basePrice: this.state.item.basePrice,
      attributes: this.state.item.attributes,
      img: this.state.item.img,
      quantity: 1
    }
    if (this.props.cart.items.length === 0) {
      this.props.dispatch(newCart(curItem))
    }
    // } else if (this.props.cart.items.includes(this.item.id)) {
    //   console.log('adding one to this item')
    // } else {
    //   console.log('item does not exist. adding new item to the cart')
    // }
  }

  minus() {
    const itemsArray = this.props.cart.items
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }))
      for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].id === this.state.item.id) {
          if (itemsArray[i].quantity === 1) {
            itemsArray.splice(i)
            this.props.dispatch(addItem(itemsArray))
          } else {
            itemsArray[i].quantity -= 1
            this.props.dispatch(addItem(itemsArray))
          }
        }
      }
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.add}>+</button>
        <p>{this.state.quantity}</p>l
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
