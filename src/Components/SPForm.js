import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newCart, updateQuantity, addItem, newAttributes, updateAttributes, updateId, updateDevCred, updateProductTotal } from '../actions/cart';
import { itemExists, getQuantity } from '../helpers/cart';
import cartAPI from '../API/cart';

class SPForm extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="spForm">
        <h3>Super Power</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam tellus, gravida sed tellus quis, pharetra luctus mi. Ut feugiat, metus id molestie dignissim, justo dolor porta augue, nec egestas ante dui eu diam. Curabitur non posuere metus. Pellentesque dictum nec enim et ultrices. Suspendisse efficitur euismod auctor.</p>
        <button className="promo-btn spBtn">Buy</button>
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
