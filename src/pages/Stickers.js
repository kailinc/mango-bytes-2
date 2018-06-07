import React, { Component } from 'react';

import Shop from './Shop';

class Stickers extends Component {
  constructor(){
    super()
    this.state =  {
      headline: 'sticker',
      header: 'All Stickers',
      msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
    }
  }

  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}
        filter='stickers'/>
    )
  }
}

export default Stickers;
