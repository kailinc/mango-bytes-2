import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addItem } from '../actions/cart';
import ItemForm from './ItemForm';

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
    const item = this.props.item
    this.props.dispatch(addItem(item))
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
            <Link to={{
              pathname: '/item/' + this.props.item.id,
              state: { itemId: this.props.item.id }
            }}>VIEW</Link>
          </div>
        </div>
        <div className='info'>
          <h4>{this.props.item.name}</h4>
              <ul>
                { attributes }
              </ul>
              <p>DevCred: <span className='increase-pts'>+{this.props.item.devCred}</span></p>
          <p>${this.props.item.basePrice}.00</p>

          <ItemForm item={this.props.item}/>
        </div>
      </div>
    )
  }
}

export default connect()(Item);
