import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemForm from './ItemForm';
import { convertToDollars } from '../helpers/cart';

class Item extends Component {
  constructor(props){
    super()
    this.state = {
      selectClass: 'item '
    }
    this.select = this.select.bind(this)
    this.unselect = this.unselect.bind(this)
  }

  select() {
    this.setState((prevState) => ({
      selectClass: prevState.selectClass += 'selected '
    }))
  }

  unselect() {
    this.setState({
      selectClass: 'item '
    })
    console.log('unselect()')
  }

  render() {
    const attributesArray = this.props.item.attributes
    const attributes = attributesArray.map((attribute, index)=> <li
      key={index}
      className='attributes'>
      {attribute.name}: <span className='increase-pts green'>+{attribute.exp}</span>
    </li>)
    const imgUrl = this.props.item.img
    const backgroundImg = {
      backgroundImage: "url(" + imgUrl + ")"
    }
    return(
      <div className={this.state.selectClass}>
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
          <ItemForm handleSelect={this.select}  handleUnselect={this.unselect} item={this.props.item}/>
        </div>
      </div>
    )
  }
}

export default Item;
