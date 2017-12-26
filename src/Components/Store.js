import React, { Component } from 'react';
import Routes from './Routes';

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userName: undefined,
        token: undefined
      },
      cart: {
        item: [ 'sdfsd']
      }
    }
  }

  render() {
    return (
      <div>
        <Routes user={this.state.user} cart={this.state.cart}/>
      </div>
    )
  }
}

export default Store;
