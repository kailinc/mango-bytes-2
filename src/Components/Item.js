import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super()
    this.state = {
      quantity: 0
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

  render() {
    const attributesArray = [{javascript: 10},{ python: 10}, {css: 10}]
    const attributes = attributesArray.map((attribute, index)=> <li key={index}>{Object.keys(attribute)[0]}: +{Object.values(attribute)[0]}</li>)
    return(
      <div className='item'>
        <div className='aside-img-div'>
          <img src={this.props.item.img} alt='product'/>
        </div>
        <div className='info'>
          <p className='item-name'>{this.props.item.name}</p>
          <div className='items'>
            <h5>Attributes</h5>
            <p>DevCred: +{this.props.item.devCred}</p>
              <ul>
                { attributes }
              </ul>
          </div>
          <p>${this.props.item.basePrice}.00</p>

          <div className='items'>
            <button onClick={this.add}>+</button>
            <p>{this.state.quantity}</p>
            <button onClick={this.minus}>-</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
