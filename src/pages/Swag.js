import React, { Component } from 'react';

import Shop from './Shop';

class Swag extends Component {
  constructor(){
    super()
    this.state =  {
      headline: 'swag',
      header: 'All Swag',
      msg: ['Atheletes have jerseys. Rappers have sun glasses. Instagram Fitness Baes have followers. But we are Matheletes. We have SWAG! When we rock them, we feel legit. We represent a programming language, framework, company, or database PROUDLY! ']
    }
  }

  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}
        filter='swag'/>
    )
  }
}

export default Swag;
