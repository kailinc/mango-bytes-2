import React, { Component  } from 'react';

class HRAd extends Component {
  constructor() {
    super()
    this.state = {
      msgs: ['For 2 Bitcoin this could be your ad',
             'Google is your friend',
             'Are you WEBSCALE bro? #Scalable',
             'Use Promo Code monGOD99 to get $25 off your purchase',
             'That is not a bug. Its a feature'],
      msg: ''
    }
  }

  componentWillMount() {
    let num = Math.floor(Math.random() * this.state.msgs.length)
    this.setState({
      msg: this.state.msgs[num]
    })
  }

  render(){
    return(
      <div className="adCon hrAdCon">
        <h3>{this.state.msg}</h3>
      </div>
    )
  }
}

export default HRAd;
