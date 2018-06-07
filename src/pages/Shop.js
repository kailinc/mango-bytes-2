import React, { Component } from 'react';

import { connect } from 'react-redux';

import Feed from '../Components/Feed';
import SideProfile from '../Components/SideProfile';
import Jimbotron from '../Components/Jimbotron';
import Headline from '../Components/Headline';
import HRAd from '../Components/HRAd';

import itemAPI from '../API/item';
import { setShop } from '../actions/shop';
import { comparePrice, compareValue, compareDevCred, compareDate } from '../helpers/filter';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      searchResults: [],
      curFilter: ''
     }
     this.search = this.search.bind(this)
     this.filter = this.filter.bind(this)
     this.sorting = this.sorting.bind(this)
  }

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => {
        this.props.dispatch(setShop(response.data.items))
      })
      .then(() => this.filter(this.props.filter, this.props.shop.all))
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

  filter(option, items) {
    if (option === 'none') {
      this.setState({
        searchResults: this.props.shop.all
      })
    } else {
      let searchResults = this.props.shop.all.filter((cur) => cur.category === option )
      this.setState({
        searchResults: searchResults
      })
    }
  }

  sorting(option) {
    if (this.state.curFilter === option) {
      this.setState((prevState) => ({ searchResults: prevState.searchResults.reverse()}))
    } else {
      this.setState({
        curFilter: option
      })
      let searchResults = []
      switch(this.state.curFilter) {
        case 'price':
          searchResults = this.state.searchResults.sort(comparePrice)
          break;
        case 'value':
          searchResults = this.state.searchResults.sort(compareValue)
          break;
        case 'devcred':
          searchResults = this.state.searchResults.sort(compareDevCred)
          break;
        default:
          searchResults = this.state.searchResults.sort(compareDate)

      }
      this.setState({
        searchResults: searchResults
      })
    }
  }

  render() {
    return(
      <div>
        <Jimbotron headline={this.props.headline} msg={this.props.msg}/>
        <HRAd msg="Stack Overflow where all the answer resides."/>
        <Headline headline={this.props.header}/>
        <hr></hr>
        <div className='store'>
          <SideProfile/>
          <Feed handleSearch={this.search} handleSorting={this.sorting} items={this.state.searchResults}/>
        </div>
        <HRAd msg="Stack Overflow where all the answer resides."/>
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
