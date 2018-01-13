import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const attributes = attributesArray.map((attribute, index)=> <li
      key={index}
      className='attributes'>
      {Object.keys(attribute)[0]}: <span className='increase-pts'>+{Object.values(attribute)[0]}</span>
    </li>)
    const imgUrl = this.props.item.img
    const backgroundImg = {
      backgroundImage: "url(" + imgUrl + ")"
    }

    return(
      <div className='item'>
        <div className='item-img-div'>
          <div className='item-img' style={backgroundImg}>
          </div>
          <div className='item-msg'>
            <Link to='/'>VIEW</Link>
          </div>
        </div>
        <div className='info'>
          <h4>{this.props.item.name}</h4>
              <ul>
                { attributes }
              </ul>
              <p>DevCred: <span className='increase-pts'>+{this.props.item.devCred}</span></p>
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
