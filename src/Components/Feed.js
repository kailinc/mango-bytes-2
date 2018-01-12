import React, { Component } from 'react';

import Filters from './Filters';

class Feed extends Component {
  render() {
    return(
      <div className='feed-container'>
        <Filters />
        <div className='items'>

        </div>
      </div>
    )
  }
}

export default Feed;
