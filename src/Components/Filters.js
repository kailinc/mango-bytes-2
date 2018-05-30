import React, { Component } from 'react';

import SearchBar from '../Components/SearchBar';

class Filters extends Component {
  render() {
    const filters = ['value', 'price', 'devcred', 'date']
    const options = filters.map((cur, index) => <li><a onClick={() => this.props.handleFilter(cur)}className='filter-options'>{cur.toUpperCase()}</a></li>)
    return(
      <div>
        <div className='filters'>
          <ul>
            <li><a className='filter-header'>FILTER BY</a></li>
             { options }
             <li><SearchBar handleSearch={this.props.handleSearch} /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Filters;
