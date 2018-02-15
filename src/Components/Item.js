import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemForm from './ItemForm';
import { convertToDollars } from '../helpers/cart';

class Item extends Component {
  constructor(props){
    super()
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
          <p>{convertToDollars(this.props.item.basePrice)}</p>

          <ItemForm item={this.props.item}/>
        </div>
      </div>
    )
  }
}

export default Item;
