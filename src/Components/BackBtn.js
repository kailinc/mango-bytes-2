import React, { Component  } from 'react';

class BackBtn extends Component {
  render(){
    return(
      <button className="btn promo-btn back-btn" onClick={this.props.backward}>Back</button>
    )
  }
}

export default BackBtn;
