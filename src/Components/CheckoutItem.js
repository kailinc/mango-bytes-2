import React, { Component } from 'react';

class CheckoutItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }
  render() {
    return(
      <div className="item-hr">
        <div>
          <img src={this.state.item.img} />
        </div>
        <div>
          <p>{this.state.item.description}</p>
        </div>
        <div>
          <p>{this.state.item.price}</p>
        </div>
        <div>
          <p>{this.state.item.quantity}</p>
        </div>
        <div>
          <p>$0.00</p>
        </div>
      </div>
    )
  }
}

export default CheckoutItem;
