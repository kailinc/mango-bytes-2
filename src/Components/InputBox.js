import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      inputClass: 'inputField',
      inputBoxClass: 'inputBox'
    }
    this.addTouchedClass = this.addTouchedClass.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => {
      return { inputBoxClass: prevState.inputBoxClass + " " + this.props.size }
    })
  }

  addTouchedClass() {
    this.setState((prevState) => {
      return { inputClass: prevState.inputClass + " touched" }
    })
  }

  render() {
    return (
      <div className={this.state.inputBoxClass}>
        <input type="text" className={this.state.inputClass} required onClick={this.addTouchedClass}/>
        <label className="inputLabel">{this.props.label}</label>
      </div>
    )
  }
}

export default InputBox;
