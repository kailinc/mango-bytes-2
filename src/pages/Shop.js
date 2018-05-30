import React, { Component } from 'react';

import { connect } from 'react-redux';

import Feed from '../Components/Feed';
import SideProfile from '../Components/SideProfile';
import Jimbotron from '../Components/Jimbotron';
import Headline from '../Components/Headline';

import itemAPI from '../API/item';
import { setShop } from '../actions/shop';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      searchResults: []
     }
     this.search = this.search.bind(this)
     this.filter = this.filter.bind(this)
  }

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => {
        this.setState({
          searchResults: response.data.items
        })
      })
      .then(() => this.props.dispatch(setShop(this.state.searchResults)))
      .catch((error)=> {
        console.log(error)
      })
  }

  search(input) {
    const searchResults = this.props.shop.all.filter((cur) => cur.name.toLowerCase() === input.toLowerCase())
    this.setState({
      searchResults: searchResults
    })
  }

  filter(option) {
    // reorder it
    // this.setState({
    //   searchResults: searchResults
    // })
  }

  render() {
    return(
      <div>
        <Jimbotron headline={this.props.headline} msg={this.props.msg}/>
        <Headline headline={this.props.header}/>
        <hr></hr>
        <div className='store'>
          <SideProfile/>
          <Feed handleSearch={this.search} handleFilter={this.filter} items={this.state.searchResults}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    shop: state.shop
  };
};

export default connect(mapStateToProps)(Shop);
