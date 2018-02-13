import React, { Component } from 'react';

import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { removeItem } from '../actions/cart';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.dispatch(removeItem(this.props.item.id));
  }
  render() {
    return(
      <div className="item-hr">
        <div>
          <img className='item-hr-img' src={this.props.item.img} />
        </div>
        <div>
          <p>{this.props.item.name}</p>
          <p>{this.props.item.devCred}</p>
          <p>{this.props.item.attributes}</p>
        </div>
        <div>
          <p>${this.props.item.basePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </div>
        <div>
          <ItemForm item={this.props.item}/>
          <button onClick={this.removeItem}>Remove</button>
        </div>
        <div>
          <p>${(this.props.item.quantity * this.props.item.basePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </div>
      </div>
    )
  }
}

export default connect()(CheckoutItem);