import React, { Component } from 'react';

import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { removeItem, removeAttributes } from '../actions/cart';
import { convertToDollars } from '../helpers/cart';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.dispatch(removeItem(this.props.item.item_id));
    this.props.dispatch(removeAttributes(this.props.item.attributes, this.props.item.quantity))
  }

  render() {
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
          <ItemForm item={this.props.item}/>
          <button onClick={this.removeItem}>Remove</button>
        </div>
        <div>
          <p>{convertToDollars(this.props.item.basePrice * this.props.item.quantity)}</p>
        </div>
      </div>
    )
  }
}

export default connect()(CheckoutItem);
