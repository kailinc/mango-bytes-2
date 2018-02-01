import React, { Component  } from 'react';

class UIMessage extends Component {
  render(){
    return(
      <div>
        <p className={this.props.type}>{this.props.msg}</p>
      </div>
    )
  }
}

export default UIMessage;
