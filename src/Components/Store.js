import React, { Component } from 'react';
import Routes from './Routes';
import API from '../API';

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
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignUp(data) {
    API.signUp(data)
      .then((response) => console.log('this is response ', response))
      .catch((error) => {
        console.log(error)
      })
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
          handleSignUp={this.handleSignUp}
          token={this.state.user.token}/>
      </div>
    )
  }
}

export default Store;
