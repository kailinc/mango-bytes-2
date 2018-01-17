import React, { Component  } from 'react';

import API from '../API';
import Headline from './Headline';
import Aside from './Aside';

class ItemPage extends Component {
  constructor(){
    super()
    this.state = {
      item: {},
      quantity: 0
    }
  }

  componentWillMount(){
    API.getItem(this.props.match.params.id)
      .then((response) => {
        this.setState({
          item: response.data.item
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render(){
    const attributesArray = [{javascript: 10},{ python: 10}, {css: 10}]
    const attributes = attributesArray.map((attribute, index)=> <li
      key={index}
      className='attributes'>
      {Object.keys(attribute)[0]}: <span className='increase-pts'>+{Object.values(attribute)[0]}</span>
    </li>)

    return(
      <div className='itemPage'>
        <div className='itemProfile'>
          <div className='itemImgs'>
            <img className='mainImg' src={this.state.item.img} alt='item' />
          </div>
          <div className='itemInfo'>
            <h2>{this.state.item.name}</h2>
            <p>${this.state.item.basePrice}</p>
            <p>{this.state.item.des}</p>
            <ul>
              <li>DevCred: {this.state.item.devCred}</li>
              { attributes }
            </ul>
            <div className='items'>
              <button>+</button>
              <p>{this.state.quantity}</p>
              <button>+</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ItemPage;
