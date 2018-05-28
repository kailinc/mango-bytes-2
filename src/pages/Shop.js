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
        <Jimbotron headline={this.props.headline} msg={this.props.msg}/>
        <Headline headline={this.props.header}/>
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
