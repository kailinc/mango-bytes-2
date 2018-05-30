import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

class VAd extends Component {
  render(){
    return(
      <div className="VAdCon">
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

export default VAd;
