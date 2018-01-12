import React, { Component } from 'react';

import Feed from './Feed';
import Profile from './Profile';
import Headline from './Headline';
import API from '../API';

const store = require('../store')

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      user: {},
      headline: 'All Items'
    }
    this.getUserInfo = this.getUserInfo.bind(this)
  }

  componentWillMount(){
    API.getItems()
      .then((response) => {
        this.setState({
          items: response.data.items
        })
      })
      .then(() => this.getUserInfo())
      .catch((error)=> {
        console.log(error)
      })
  }

  getUserInfo() {
    if (store.user.token) {
      API.showUser(store.user.id, store.user.token)
        .then((response)=>  {
          this.setState({
            user: response.data.user
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render() {
    return(
      <div className='shop'>
        <Headline headline={this.state.headline}/>
        <Profile user={this.state.user} />
        <Feed items={this.state.items}/>
      </div>
    )
  }
}

export default Shop;
