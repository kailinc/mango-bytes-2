import React, { Component  } from 'react';

import landingPic from '../assets/landing.jpg';

import SPForm from '../Components/SPForm';

class PowerOne extends Component {
  render(){
    return(
      <div className="superpower">
        <div className="sp3box sp1box1">
          <img className="sp3img" alt="primary power" src={landingPic}/>
        </div>
        <div className="sp3box sp3box3">
          <SPForm item={this.props.item}/>
        </div>
        <div className="sp3box sp1box3">
          <img className="sp3img" alt="secondary power"src={landingPic}/>
        </div>
      </div>
    )
  }
}

export default PowerOne;
