import React, { Component  } from 'react';

class VAd extends Component {
  constructor() {
    super()
    this.state = {
      msgs: ['Need investors? Just add Blockchain to your company name.',
             'For 2 Bitcoin this can be your ad',
             'I go to hackathorns for the free swag.',
             'Use Promo Code monGOD99 to get $25 off your purchase',
             'TBH, I use Slack because of the dancing parrots.'],
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
      <div className="adCon VAdCon">
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

export default VAd;
