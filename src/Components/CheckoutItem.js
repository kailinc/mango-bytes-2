import React, { Component } from 'react';

import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { removeItem } from '../actions/cart';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.dispatch(removeItem(this.state.item.id));
  }
  render() {
    return(
      <div className="item-hr">
        <div>
          <img className='item-hr-img' src={this.state.item.img} />
        </div>
        <div>
          <p>{this.state.item.name}</p>
          <p>{this.state.item.devCred}</p>
          <p>{this.state.item.attributes}</p>
        </div>
        <div>
          <p>${this.state.item.basePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </div>
        <div>
          <ItemForm item={this.state.item}/>
          <button onClick={this.removeItem}>Remove</button>
        </div>
        <div>
          <p>${(this.state.item.quantity * this.state.item.basePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </div>
      </div>
    )
  }
}

export default connect()(CheckoutItem);
