import React, { Component } from 'react';

import Feed from '../Components/Feed';
import SideProfile from '../Components/SideProfile';
import Headline from '../Components/Headline';
import itemAPI from '../API/item';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      headline: 'ALL ITEMS'
    }
  }

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => {
        this.setState({
          items: response.data.items
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render() {
    return(
      <div>
        <Headline headline={this.state.headline}/>
        <hr></hr>
        <div className='store'>
          <SideProfile/>
          <Feed items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default Shop;
