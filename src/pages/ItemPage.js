import React, { Component  } from 'react';

import itemAPI from '../API/item';
import ItemForm from '../Components/ItemForm';

class ItemPage extends Component {
  constructor(){
    super()
    this.state = {
      item: {},
      attributes: [],
      quantity: 0
    }
  }

  componentWillMount(){
    itemAPI.getItem(this.props.match.params.id)
      .then((response) => {
        this.setState({
          item: response.data.item
        })
        return response.data.item.attributes
      })
      .then((attributes) => {
        this.setState({
          attributes: attributes
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render(){
    let attributes = this.state.attributes.map((cur, index) =>  <li key={index} className='attributes'> {cur.name}: <span className='increase-pts'>+{cur.exp}</span></li>)

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
            <ItemForm item={this.state.item}/>
          </div>
        </div>

      </div>
    )
  }
}

export default ItemPage;
