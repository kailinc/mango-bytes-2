import React, { Component  } from 'react';

import comPic from '../assets/test.jpg';

import SPForm from '../Components/SPForm';

class PowerOne extends Component {
  render(){
    const powerPic = this.props.item.img
    return(
      <div className="superpower">
        <div className="sp3box sp1box1">
          <img className="sp3img" alt="primary power" src={comPic}/>
        </div>
        <div className="sp3box sp3box3">
          <SPForm item={this.props.item}/>
        </div>
        <div className="sp3box sp1box3 powerPicCon b1">
          <img className="powerPic" alt="secondary power" src={powerPic}/>
        </div>
      </div>
    )
  }
}

export default PowerOne;
