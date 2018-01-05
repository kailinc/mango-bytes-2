import React, { Component } from 'react';

import Feed from './Feed';
import Profile from './Profile';
import API from '../API';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  componentWillMount(){
    API.getItems()
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
        <Feed />
        <Profile />
      </div>
    )
  }
}

export default Shop;
