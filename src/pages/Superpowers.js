import React, { Component } from 'react';

import Jimbotron from '../Components/Jimbotron';
import PowerThird from '../Components/PowerThird';
import PowerSecond from '../Components/PowerSecond';
import PowerOne from '../Components/PowerOne';

import itemAPI from '../API/item';

class Superpowers extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      headline: 'superpower',
      header: 'All Super Powers',
      msg: ['Some coders just seem to write beautiful clean code, understand documentations easily, or refactor code like a machine. That is because they have super powers. You can get different super powers here. With great power comes great responsibility.']
  }
}

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => response.data.items.filter((cur) => cur.category === 'superpowers'))
      .then((data) => {
        this.setState({
          items: data
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render() {
    const content = this.state.items.map((cur, index) => <PowerThird item={cur} />)
    return(
      <div>
        <Jimbotron headline={this.state.headline} msg={this.state.msg}/>
        <div>
          {content}
        </div>
      </div>
    )
  }
}

export default Superpowers;
