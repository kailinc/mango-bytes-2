import React, { Component  } from 'react';

class Jimbotron extends Component {
  render(){
    const msg = this.props.msg.map((cur, index) => <h3 key={index}>{cur}</h3>)
    return(
      <div className={"landingPic "+ this.props.headline + "Con"}>
        <div className="profileLabel pagesGreeting">
          <div>
            <span className="coderName">{this.props.headline.toUpperCase()}</span>
          </div>
          <div className={"profileDes pageMsg " + this.props.headline +"Text"}>
            {msg}
          </div>
        </div>
      </div>
    )
  }
}

export default Jimbotron;
