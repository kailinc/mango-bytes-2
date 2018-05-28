import React, { Component } from 'react';

import Shop from './Shop';

class Section extends Component {
  constructor(){
    super()
  }

  render() {
    return(
      <Shop
        headline={this.props.location.state.headline}
        header={this.props.location.state.header}
        msg={this.props.location.state.msg}/>
    )
  }
}

export default Section;
