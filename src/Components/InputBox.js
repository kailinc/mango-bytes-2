import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      class: ''
    }
    this.addTouchedClass = this.addTouchedClass.bind(this);
  }

  addTouchedClass() {
    console.log("input is clicked");
  }
  render() {
    return (
      <div className="inputBox">
        <input type="text" className="inputField half" required onClick={this.addTouchedClass}/>
        <label className="inputLabel">FIRST NAME</label>
      </div>
    )
  }
}

export default InputBox;
