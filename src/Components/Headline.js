import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.headline}</h3>
      </div>
    )
  }
}

export default Headline;
