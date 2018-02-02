import React, { Component  } from 'react';

class UIMessage extends Component {
  render(){
    return(
      <div className={this.props.type + " ui-container"}>
        <h4>{this.props.msg}</h4>
      </div>
    )
  }
}

export default UIMessage;
