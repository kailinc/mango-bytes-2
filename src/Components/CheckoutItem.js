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
      <div>
        <img src={this.state.item.img} />
      </div>
    )
  }
}

export default CheckoutItem;
