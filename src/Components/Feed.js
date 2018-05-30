import React, { Component } from 'react';

import Filters from './Filters';
import Item from './Item';
import SearchBar from '../Components/SearchBar';

class Feed extends Component {
  render() {
    const items = this.props.items.map((item, index) => <Item key={item.id} item={item}/>)
    return(
      <div className='feed-container'>
        <SearchBar handleSearch={this.props.handleSearch}/>
        <Filters handleFilter={this.props.handleFilter}/>
        <div className='items'>
          { items }
        </div>
      </div>
    )
  }
}

export default Feed;
