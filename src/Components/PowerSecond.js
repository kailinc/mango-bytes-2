import React, { Component  } from 'react';

import landingPic from '../assets/landing.jpg';
import test from '../assets/test.jpg';

import SPForm from '../Components/SPForm';

class PowerSecond extends Component {
  render(){
    return(
      <div className="superpower">
        <div className="sp3box">
          <img className="sp3img" alt="primary power" src={landingPic}/>
          <SPForm pos="Right"/>
        </div>
        <div className="sp3box">
          <img className="sp3img" alt="secondary power" src={test}/>
          <SPForm pos="Left"/>
        </div>
      </div>
    )
  }
}

export default PowerSecond;
