import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    // get the cart
    // push the item to cart
    // if duplicate, increase the quantity
    // dispatch it
    const itemsArray = this.props.cart.items

    let cart
    if (itemsArray.length === 0) {
      cart = createCart(this.state.item)
    } else {

    }

    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].id === this.state.item.id) {
    //     items[i].quantity += 1
    //   } else {
    //     items.push(this.state.item)
    //   }
    // }
    console.log('itemForm: this is items after add ', cart)
  }

  minus() {
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }))
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
