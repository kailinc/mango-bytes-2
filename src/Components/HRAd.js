import React, { Component  } from 'react';

class HRAd extends Component {
  render(){
    return(
      <div className="adCon hrAdCon">
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

export default HRAd;
