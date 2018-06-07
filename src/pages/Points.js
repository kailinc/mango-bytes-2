import React, { Component } from 'react';

import Shop from './Shop';

class Points extends Component {
  constructor(){
    super()
    this.state =  {
      headline: 'points',
      header: 'All Points',
      msg: ['There was only a few ways to become better at a language or a framework: read the documentation, take a class about it, or write a project using it. What if I told you there was an easier way? A much faster way. Here on Mango Bytes 2.0, you can buy experience in those languages and frameworks. #NoWork ']
    }
  }

  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}
        filter='points' />
    )
  }
}

export default Points;
