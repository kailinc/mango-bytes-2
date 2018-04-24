import React, { Component  } from 'react';

class BackBtn extends Component {
  render(){
    return(
      <button onClick={this.props.backward}>Back</button>
    )
  }
}

export default BackBtn;
