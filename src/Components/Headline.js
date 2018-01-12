import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return(
      <div className='title'>
        <h2>{this.props.headline}</h2>
      </div>
    )
  }
}

export default Headline;
