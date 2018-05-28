import React, { Component } from 'react';

import Jimbotron from '../Components/Jimbotron';
import PowerThird from '../Components/PowerThird';
import PowerSecond from '../Components/PowerSecond';
import PowerOne from '../Components/PowerOne';

import itemAPI from '../API/item';

class Superpower extends Component {
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
        <div>
          <PowerThird/>
          <PowerSecond/>
          <PowerOne/>
        </div>
      </div>
    )
  }
}

export default Superpower;
