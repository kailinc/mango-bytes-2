import React, { Component  } from 'react';

import { Link } from 'react-router-dom';

class RecBar extends Component {
  render(){
    const items = this.props.rec.map((cur, index) => {
      const backgroundImg = {
        backgroundImage: "url(" + cur.img + ")"
      }
      return (
        <div key={index} className='item-img-div'>
          <div className='item-img' style={backgroundImg}>
          </div>
          <div className='item-msg'>
            <Link onClick={() => this.props.reload(cur)} to={{
              pathname: '/item/' + cur.id,
              state: { itemId: cur.id }
            }}>{cur.name}</Link>
          </div>
        </div>)
    })

    return(
      <div className="cart-col recBar">
        <div className="cart-header recBar">
          <h3>Recommendations For You</h3>
        </div>
        <div className="cart-table recBarCol">
          {items}
        </div>
      </div>
    )
  }
}

export default RecBar;
