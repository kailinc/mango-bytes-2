import React, { Component  } from 'react';
import Greeting from './Greeting';
import Banner from './Banner';

class Home extends Component {
  render(props){
    return(
      <div>
        <Greeting />
        <Banner />
      </div>
    )
  }
}

export default Home;
