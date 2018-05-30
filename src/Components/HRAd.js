import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

class HRAd extends Component {
  render(){
    return(
      <div className="hrAdCon">
        <p>{this.props.msg}</p>
      </div>
    )
  }
}

export default HRAd;
