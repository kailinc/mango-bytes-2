import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, addItem, newAttributes, updateAttributes, addAttributes } from '../actions/cart';
import { itemExists, getQuantity, seperateAttr } from '../helpers/cart';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: {}
    }
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.formatItem = this.formatItem.bind(this)
    this.formatAttributes = this.formatAttributes.bind(this)
  }

  componentDidMount() {
    let item = this.formatItem();
    this.setState({
      item: item
    })
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

  addOne() {
    let attributes = this.formatAttributes();

    if (this.props.cart.items.length === 0 ) {
      this.props.dispatch(newCart(this.state.item))
      this.props.dispatch(newAttributes(attributes))
    } else if (itemExists(this.props.cart.items, this.state.item.item_id)) {
      this.props.dispatch(updateQuantity(this.state.item.item_id, 1))
      this.props.dispatch(updateAttributes(attributes, 1))
    } else {
      this.props.dispatch(addItem(this.state.item))
      this.props.dispatch(updateAttributes(attributes, 1));
    }
  }

  minusOne() {
    let attributes = this.formatAttributes();

    if (this.props.cart.items.length > 0) {
      if (itemExists(this.props.cart.items, this.state.item.item_id)) {
        this.props.dispatch(updateQuantity(this.state.item.item_id, -1))
        this.props.dispatch(updateAttributes(attributes, -1))
      }
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.addOne}>+</button>
        <p>{getQuantity(this.props.cart.items, this.state.item.item_id)}</p>
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
