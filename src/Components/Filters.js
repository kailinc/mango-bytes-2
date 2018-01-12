import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return(
      <div>
        <div className='filters'>
          <ul>
            <li><a className='filter-header'>FILTER BY</a></li>
            <li><a className='filter-options'>CATEGORY</a></li>
            <li><a className='filter-options'>PRICE</a></li>
            <li><a className='filter-options'>RATING</a></li>
            <li><a className='filter-options'>NEW</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Filters;
