import React, { Component  } from 'react';

import { connect } from 'react-redux';

import itemAPI from '../API/item';
import ItemForm from '../Components/ItemForm';
import RecBar from '../Components/RecBar';

class ItemPage extends Component {
  constructor(){
    super()
    this.state = {
      item: {},
      attributes: [],
      quantity: 0,
      rec: []
    }
    this.getRec = this.getRec.bind(this)
    this.reload = this.reload.bind(this)
    this.select = this.select.bind(this)
    this.unselect = this.unselect.bind(this)
  }

  select() {
    console.log('')
  }

  unselect() {
    console.log('')
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
      .then(() => this.getRec())
      .then(() => window.scroll({ top: 0, left: 0, behavior: 'smooth'}))
      .catch((error)=> {
        console.log(error)
      })
  }

  getRec() {
    let counter = 0;
    const rec = []
    let all = this.props.shop.all
    let attributes = this.state.attributes
    for (let i = 0; i < attributes.length; i++) {
      for (let j = 0; j < all.length; j++) {
        if (attributes[i].name.toLowerCase() === all[j].name.toLowerCase() && attributes[i].name.toLowerCase() != this.state.item.name.toLowerCase()) {
          rec.push(all[j])

          counter += 1;
          break
        }
      }
    }

    while (counter < 7) {
      const ran = Math.floor(Math.random() * all.length)
      rec.push(all[ran])
      counter++;
    }

    this.setState({
      rec: rec
    })
  }

  reload(item) {
    this.setState({
      item: item
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
            <ItemForm handleSelect={this.select} handleUnselect={this.unselect} item={this.state.item}/>
          </div>
        </div>
        <RecBar rec={this.state.rec}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shop: state.shop
  };
};

export default connect(mapStateToProps)(ItemPage);
