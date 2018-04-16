import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      inputClass: 'inputField',
      inputBoxClass: 'inputBox'
    }

    this.addTouchedClass = this.addTouchedClass.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.setState((prevState) => {
      return { inputBoxClass: prevState.inputBoxClass + " " + this.props.size }
    })
  }

  addTouchedClass() {
    if (!this.state.inputClass.includes("touched")) {
      this.setState((prevState) => {
        return { inputClass: prevState.inputClass + " touched" }
      })
    }
  }

  handleChange(e) {
    let value = e.target.value;
    this.props.updateValue(this.props.field, value)
  }

  render() {
    return (
      <div className={this.state.inputBoxClass}>
        <input value={this.props.value} type={this.props.type} className={this.state.inputClass} required onClick={this.addTouchedClass} onChange={(e) => this.handleChange(e)}/>
        <label className="inputLabel">{this.props.label}</label>
      </div>
    )
  }
}

export default InputBox;
