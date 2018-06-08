import React, { Component  } from 'react';

import landingPic from '../assets/landing.jpg';

import SPForm from '../Components/SPForm';

class PowerThird extends Component {
  render(){
    const powerPic = this.props.item.img
    return(
      <div className="superpower">
        <div className="sp3box1 sp3box">
          <img className="sp3img" alt="primary power" src={landingPic}/>
        </div>
        <div className="sp3box2 sp3box powerPicCon b2">
          <img className="powerPic" alt="secondary power" src={powerPic}/>
        </div>
        <div className="sp3box3 sp3box">
          <SPForm item={this.props.item}/>
        </div>
      </div>
    )
  }
}

export default PowerThird;
