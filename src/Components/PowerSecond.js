import React, { Component  } from 'react';

import landingPic from '../assets/landing.jpg';
import test from '../assets/test.jpg';

class PowerSecond extends Component {
  render(){
    return(
      <div className="superpower">
        <div className="sp3box">
          <img className="sp3img" src={landingPic}/>
          <p></p>
        </div>
        <div className="sp3box">
          <img className="sp3img" src={test}/>
        </div>
      </div>
    )
  }
}

export default PowerSecond;
