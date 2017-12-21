import React, { Component } from 'react';
import Routes from './Routes';

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      cart: {}
    }
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default Store;
