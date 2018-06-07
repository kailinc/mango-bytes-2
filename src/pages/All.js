import React, { Component } from 'react';

import Shop from './Shop';

class All extends Component {
  constructor(){
    super()
    this.state =  {
      headline: 'all',
      header: 'Everything',
      msg: ['Here is everything you need to become a better coder. We have experience in programming languages/frameworks, stickers, swag, miscellaneous, and super powers. We have what you need.']
    }
  }

  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}
        filter='none'/>
    )
  }
}

export default All;
