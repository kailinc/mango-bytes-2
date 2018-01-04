import React, { Component  } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render(props){
    console.log('this is loggedIn', this.props.justLoggedIn)
    return(
      <div>
        This is Home
      </div>
    )
  }
}

export default Home;
