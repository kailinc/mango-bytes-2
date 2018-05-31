import React, { Component  } from 'react';

class VAd extends Component {
  render(){
    return(
      <div className="adCon VAdCon">
        <p>{this.props.msg}</p>
      </div>
    )
  }
}

export default VAd;
