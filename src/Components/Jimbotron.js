import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

class Jimbotron extends Component {
  render(){
    const msg = this.props.msg.map((cur, index) => <h3>{cur}</h3>)
    return(
      <div className="landingPic stickerCon">
        <div className="profileLabel">
          <div>
            <span className="coderName">{this.props.headline}</span>
          </div>
          <div className="profileDes pageMsg stickerText">
            {msg}
          </div>
        </div>
      </div>
    )
  }
}

export default Jimbotron;
