import React, { Component  } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.input)
  }

  render(){
    return(
      <div className="searchBarCon">
        <form className="searchBarForm" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className="searchBar" type="text" placeholder="Search.." name="search"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
