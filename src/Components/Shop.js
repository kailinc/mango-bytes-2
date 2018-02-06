import React, { Component } from 'react';

import Feed from './Feed';
import Profile from './Profile';
import Headline from './Headline';
import API from '../API';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      user: {},
      headline: 'ALL ITEMS'
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

  // getUserInfo() {
  //   if (store.user.token) {
  //     API.showUser(store.user.id, store.user.token)
  //       .then((response)=>  {
  //         this.setState({
  //           user: response.data.user
  //         })
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }

  render() {
    return(
      <div>
        <Headline headline={this.state.headline}/>
        <hr></hr>
        <div className='store'>
          <Profile user={this.state.user} />
          <Feed items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default Shop;
