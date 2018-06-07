import React, { Component } from 'react';

import Filters from './Filters';
import Item from './Item';

class Feed extends Component {
  render() {
    const items = this.props.items.map((item, index) => <Item key={item.id} item={item}/>)
    return(
      <div className='feed-container'>
        <Filters handleSearch={this.props.handleSearch} handleSorting={this.props.handleSorting}/>
        <div className='items'>
          { items }
        </div>
      </div>
    )
  }
}

export default Feed;
