import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

class Aside extends Component {
  render(){
    return(
      <div>
        <div className='aside-img-div'>
          <img className="asideImg" src={this.props.img} alt='aside-img'/>
          <div className="middle">
            <Link className='goal' to='/'>{this.props.hoverMsg}</Link>
          </div>
        </div>
        <div className='asideText'>
          <h3>{this.props.headline}</h3>
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

export default Aside;
