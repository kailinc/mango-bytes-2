import React, { Component  } from 'react';

class Attribute extends Component {
  render(){
    if (this.props.num > 0) {
      return (<span className="increase">+{this.props.num}</span>)
    } else {
      return (<span></span>)
    }
  }
}

export default Attribute;
