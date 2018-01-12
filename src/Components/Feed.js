import React, { Component } from 'react';

import Filters from './Filters';
import Item from './Item';

class Feed extends Component {
  render() {
    const items = this.props.items.map(() => <Item />)
    return(
      <div className='feed-container'>
        <Filters />
        <div className='items'>
          { items }
        </div>
      </div>
    )
  }
}

export default Feed;
