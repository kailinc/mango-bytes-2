import React, { Component  } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="searchBarCon">
        <input type="text" placeholder="Search..."/>
      </div>
    )
  }
}

export default SearchBar;
