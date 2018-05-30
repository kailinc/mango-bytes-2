import React, { Component  } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="searchBarCon">
        <form className="searchBarForm">
          <input className="searchBar" type="text" placeholder="Search.." name="search"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
