import React, { Component  } from 'react';
import Greeting from './Greeting';

class Home extends Component {
  render(props){
    return(
      <div>
        <Greeting />
      </div>
    )
  }
}

export default Home;
