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
    const attributes = Object.keys(this.props.user).filter((cur) => cur !== 'id' && cur !== 'token' && cur !== 'devCred' && cur !== 'email' && cur !== 'fourScreen' && cur !== 'powers' && cur !== 'firstName' && cur !== 'coderName' && cur !== 'lastName' ).map( (cur, index) => {
      const level = this.props.user[cur]
      const tileNum = getNum(level)
      let glow = "Glow"
      if (tileNum >= 7) {
        glow = " gold" + glow
      }
      return (
          <div className="badgeContainer">
            <span className={ glow+ " tile tile" +tileNum}>
            </span>
            <p className={"tileLabel label" +tileNum}>{cur}</p>
            <p className={"label" + tileNum}>{level}</p>
          </div>)
    })
    return(
      <div>
        <div className="profile landingPic">
          <div className="profileLabel">
            <div>
              <span className="coderName">{this.props.user.coderName || 'codername'}</span>
            </div>
            <div className="profileDes">
              <h3>{this.props.user.firstName || 'First'}</h3>
              <h3>{this.props.user.lastName || 'Last'}</h3>
              <h3>{this.props.user.devCred || 'DevCred: 0'}</h3>
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
