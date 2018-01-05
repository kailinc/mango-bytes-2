import React, { Component } from 'react';

import Feed from './Feed';
import Profile from './Profile';

class Shop extends Component {
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
