import React, { Component } from 'react';

import Feed from '../Components/Feed';
import SideProfile from '../Components/SideProfile';
import Jimbotron from '../Components/Jimbotron';
import Headline from '../Components/Headline';

import itemAPI from '../API/item';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      headline: '',
      header:'',
      msg: []
     }
  }

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => {
        this.setState({
          items: response.data.items
        })
      })
      .then(() => {
        this.setState({
          headline: this.props.location.state.headline,
          header: this.props.location.state.header,
          msg: this.props.location.state.msg
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render() {
    return(
      <div>
        <Jimbotron headline={this.state.headline} msg={this.state.msg}/>
        <Headline headline={this.state.header}/>
        <hr></hr>
        <div className='store'>
          <SideProfile/>
          <Feed items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default Shop;
