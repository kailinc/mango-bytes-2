import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getNum } from '../helpers/attributes';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartId: '',
    }
  }

  render(){
    const attributes = Object.keys(this.props.user).filter((cur) => cur !== 'id' && cur !== 'token' && cur !== 'devCred' && cur !== 'email' && cur !== 'fourScreen' && cur !== 'powers' ).map( (cur, index) => {
      const level = this.props.user[cur]
      const tileNum = getNum(level)
      return (
          <div className="badgeContainer">
            <span className={"tile " + "tile" +tileNum}>
            </span>
            <p className={"tileLabel " + "label" +tileNum}>{cur}</p>
            <p>{level}</p>
          </div>)
    })
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
          {attributes}
        </div>
        <h1 className="profHeader">Super Power</h1>
        <div className="tiles">
          <div className='superPowerContainer'>
            <h3 className='spLabel'>Super Power Name</h3>
            <p className="spText">long funny description about the super power</p>
          </div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
          <div className='superPowerContainer'></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
