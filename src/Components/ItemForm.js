import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 0,
      item: this.props.item
    }
  }
  render(){
    return(
      <div className='items'>
        <button>+</button>
        <p>{this.state.quantity}</p>
        <button>-</button>
      </div>
    )
  }
}

export default connect()(ItemForm);
