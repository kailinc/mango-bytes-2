import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      inputClass: 'inputField'
    }
    this.addTouchedClass = this.addTouchedClass.bind(this);
  }

  componentDidMount() {
    if (this.props.size) {
      this.setState((prevState) => {
        return { inputClass: prevState.inputClass + " "+ this.props.size }
      })
    }
  }

  addTouchedClass() {
    this.setState((prevState) => {
      return { inputClass: prevState.inputClass + " touched" }
    })
  }

  render() {
    return (
      <div className="inputBox">
        <input type="text" className={this.state.inputClass} required onClick={this.addTouchedClass}/>
        <label className="inputLabel">{this.props.label}</label>
      </div>
    )
  }
}

export default InputBox;
