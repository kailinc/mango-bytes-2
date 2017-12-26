import React, { Component } from 'react';
import Routes from './Routes';

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
      },
      cart: {
      }
    }
    this.handleSignIn = this.handleSignIn.bind(this)
  }
  handleSignIn(user) {
    this.setState({
      user
    })
  }
  render() {
    return (
      <div>
        <Routes
          user={this.state.user}
          cart={this.state.cart}
          handleSignIn={this.handleSignIn}
          token={this.state.user.token}/>
      </div>
    )
  }
}

export default Store;
