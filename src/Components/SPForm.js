import React, { Component } from 'react';
import { connect } from 'react-redux';

class SPForm extends Component {
  render(){
    let spClass = "spForm sp" + this.props.pos
    if (this.props.pos === 'Left' || this.props.pos === 'Right') {
      spClass += " spOverlay";
    }
    return(
      <div className={spClass}>
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.des}</p>
        <button className="promo-btn spBtn btn">Buy</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps)(SPForm);
