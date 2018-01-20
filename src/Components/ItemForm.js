import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 0,
      item: this.props.item
    }
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }))
  }

  minus() {
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }))
    }
  }
  render(){
    return(
      <div className='items'>
        <button onClick={this.add}>+</button>
        <p>{this.state.quantity}</p>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default connect()(ItemForm);
