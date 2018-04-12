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
    this.setState((prevState) => {
      return { inputClass: prevState.inputClass + " touched" }
    })
  }

  handleChange(e) {
    let value = e.target.value;
    console.log("inputBox: value is ", value);
    this.props.updateValue(this.props.field, value)
  }

  render() {
    return (
      <div className={this.state.inputBoxClass}>
        <input value={this.props.value} type="text" className={this.state.inputClass} required onClick={this.addTouchedClass} onChange={(e) => this.handleChange(e)}/>
        <label className="inputLabel">{this.props.label}</label>
      </div>
    )
  }
}

export default InputBox;
