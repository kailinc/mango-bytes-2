import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

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
