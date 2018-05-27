import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { clearCart, clearAttributes, updateId, clearProductTotal, updateProductFinal, resetDevCred } from '../actions/cart';

import chatImg from '../assets/chat.png';
import callImg from '../assets/call.png';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartId: '',
    }
  }

  render(){
    return(
        <div className="store confirmTable">
        user profile
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Profile);
