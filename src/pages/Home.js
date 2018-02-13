import React, { Component  } from 'react';

import Greeting from '../Components/Greeting';
import Banner from '../Components/Banner';
import Aside from '../Components/Aside';
import riseImg from '../assets/rise-and-code.jpg';
import hackathonImg from '../assets/hackathon.jpg';

class Home extends Component {
  render(props){
    return(
      <div>
        <Greeting />
        <Banner />
        <div className="aside-container">
          <Aside
            img={riseImg}
            headline='RISE AND CODE'
            message='The best way to start the day is with coffee, a computer, and good music.'
            hoverMsg='SHOP NOW' />
          <Aside
            img={hackathonImg}
            headline='HACKING AWAY'
            message='There is no better way to learn a new technology than to build with that technology.'
            hoverMsg='EXPLORE' />
        </div>
      </div>
    )
  }
}

export default Home;
