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
        <h1 className="profHeader">Attributes</h1>
        <div className="tiles">
          <div className="badgeContainer">
            <span className="tile tile0">
                <p className="tileLabel">JavaScript</p>
            </span>
            <p>100</p>
          </div>
          <span className="tile tile1">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile2">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile4">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile8">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile16">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile64">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile128">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile256">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile512">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile1024">
              <p className="attr">JavaScript</p>
          </span>
          <span className="tile tile2048">
              <p className="attr">JavaScript</p>
          </span>

        </div>
        <h1 className="profHeader">Super Power</h1>
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
