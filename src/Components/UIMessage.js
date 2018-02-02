import React, { Component  } from 'react';

class UIMessage extends Component {
  constructor() {
    super()
    this.dismiss = this.dismiss.bind(this)
  }

  dismiss() {
    this.props.unmountMe()
  }
  render(){
    return(
      <div className={this.props.type + " ui-container"}>
        <i className={this.props.type +" close icon"} onClick={this.dismiss}>x</i>
        <h4>{this.props.msg}</h4>
      </div>
    )
  }
}

export default UIMessage;
