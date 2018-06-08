import React, { Component } from 'react';

import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { removeItem, removeAttributes, updateId, updateDevCred, updateProductTotal } from '../actions/cart';
import { convertToDollars } from '../helpers/cart';
import cartAPI from '../API/cart';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    let devCred = this.props.item.quantity * this.props.item.devCred * -1
    let productTotal = this.props.item.quantity * this.props.item.basePrice * -1
    this.props.dispatch(removeItem(this.props.item.item_id));
    this.props.dispatch(removeAttributes(this.props.item.attributes, this.props.item.quantity))
    this.props.dispatch(updateDevCred(devCred))
    this.props.dispatch(updateProductTotal(productTotal))
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

  render() {
    let quantity = <p></p>
    if (this.props.item.category === 'superpowers') {
      quantity = <p>{this.props.item.quantity}</p>
    } else {
      quantity = <ItemForm handleSelect={this.props.handleSelect}
                          handleUnselect={this.props.handleUnselect}
                          item={this.props.item}/>
    }
    return(
      <div className="item-hr">
        <div>
          <img className='item-hr-img' src={this.props.item.img} alt="an item in your cart"/>
        </div>
        <div>
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.devCred}</p>
          { this.props.item.attributes.map((cur, index) => <p key={index}>{cur.name}: +{cur.exp}</p> ) }
        </div>
        <div>
          <p>{convertToDollars(this.props.item.basePrice)}</p>
        </div>
        <div>
          {quantity}
        </div>
        <div className="totalCon">
          <p>{convertToDollars(this.props.item.basePrice * this.props.item.quantity)}</p>
          <button className="btn remove-btn" onClick={this.removeItem}>Remove</button>
        </div>
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

export default connect(mapStateToProps)(CheckoutItem);
