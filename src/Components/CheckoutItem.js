import React, { Component } from 'react';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }
  render() {
    console.log('checkoutItem: this is item ', this.state.item)
    return(
      <div className="item-hr">
        <div>
          <img src={this.state.item.img} />
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
          <p>{this.state.item.quantity}</p>
        </div>
        <div>
          <p>${(this.state.item.quantity * this.state.item.basePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        </div>
      </div>
    )
  }
}

export default CheckoutItem;
