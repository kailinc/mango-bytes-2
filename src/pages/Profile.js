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
      <div>
        <div className="profile landingPic">
          <div className="profileLabel">
            <div>
              <span className="coderName">MUDA BISH</span>
            </div>
            <div className="profileDes">
              <h3>KAI-LIN </h3>
              <h3>CHEN</h3>
              <h3>DEVCRED 500,000</h3>
            </div>
          </div>
        </div>
        <div className="store confirmTable">

        </div>
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
