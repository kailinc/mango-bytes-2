import React, { Component } from 'react';

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
          </ul>
        </div>
      </div>
    )
  }
}

export default Filters;
