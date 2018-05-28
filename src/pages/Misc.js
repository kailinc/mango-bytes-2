import React, { Component } from 'react';

import Shop from './Shop';

class Misc extends Component {
  constructor(){
    super()
    this.state =  {
      headline: 'misc',
      header: 'All Miscellaneous',
      msg: ['When you make it with Cryptocurrency, you buy a lambo. When you make it in Football, you get a tattoo. Youtube = Drones. BodyBuilder = Gym Shark Gear. Rapper = Gold Chains. Developers have different things they get when they make it. At heart, we are all kids just trying to have fun.']
    }
  }

  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}/>
    )
  }
}

export default Misc;
