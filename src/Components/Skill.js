import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

class Skill extends Component {
  render(){
    return(
      <div>
        <p>{this.props.skill}: 0 +{}</p>
      </div>
    )
  }
}

export default Skill;
