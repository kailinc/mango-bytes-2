import React, { Component  } from 'react';

import landingPic from '../assets/landing.jpg';
import test from '../assets/test.jpg';

class PowerThird extends Component {
  render(){
    return(
      <div className="superpower">
        <div className="sp3box1 sp3box">
          <img className="sp3img" src={landingPic}/>
        </div>
        <div className="sp3box2 sp3box">
          <img className="sp3img" src={test}/>
        </div>
        <div className="sp3box3 sp3box">
          <h1>Super Power Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam tellus, gravida sed tellus quis, pharetra luctus mi. Ut feugiat, metus id molestie dignissim, justo dolor porta augue, nec egestas ante dui eu diam. Curabitur non posuere metus. Pellentesque dictum nec enim et ultrices. Suspendisse efficitur euismod auctor.</p>
          <button className="promo-btn spBtn">Buy</button>
        </div>
      </div>
    )
  }
}

export default PowerThird;
