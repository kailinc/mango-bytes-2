import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      inputClass: 'inputField',
      inputBoxClass: 'inputBox',
      value: ''
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
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div className={this.state.inputBoxClass}>
        <input value={this.state.value} type="text" className={this.state.inputClass} required onClick={this.addTouchedClass} onChange={this.handleChange}/>
        <label className="inputLabel">{this.props.label}</label>
      </div>
    )
  }
}

export default InputBox;
