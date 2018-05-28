import React, { Component } from 'react';

import Feed from '../Components/Feed';
import SideProfile from '../Components/SideProfile';
import Jimbotron from '../Components/Jimbotron';
import Headline from '../Components/Headline';

import itemAPI from '../API/item';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      headline: 'STICKERS',
      header:'All Stickers',
      msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
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
        <Jimbotron headline={this.state.headline} msg={this.state.msg}/>
        <Headline headline={this.state.header}/>
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
