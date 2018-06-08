import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addItem, updateDevCred, updateProductTotal } from '../actions/cart';
import { convertToDollars } from '../helpers/cart';

class SPForm extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Buy',
      color: 'promo-btn'
    }

    this.purchase = this.purchase.bind(this)
    this.formatItem = this.formatItem.bind(this)
  }

  componentWillMount() {
    const powerName = this.props.item.name
    if (this.props.user[powerName]) {
      this.setState({
        msg: 'You Have This Power!',
        color: 'hasPower'
      })
    } else if (this.props.cart.items.filter((cur) => cur.name === powerName).length > 0) {
      this.setState({
        msg: 'Added to Cart',
        color: 'success-btn'
      })
    }
  }

  formatItem() {
    return {
      item_id: this.props.item.id,
      name: this.props.item.name,
      devCred: this.props.item.devCred,
      basePrice: this.props.item.basePrice,
      attributes: [],
      img: this.props.item.img,
      quantity: 1,
      category: this.props.item.category
    }
  }

  purchase() {
    const powerName = this.props.item.name
    if (!this.props.user[powerName]) {
      if (!this.props.cart.items.filter((cur) => cur.name === powerName).length > 0) {
        const item = this.formatItem();
        this.props.dispatch(addItem(item))
        this.props.dispatch(updateDevCred(this.props.item.devCred))
        this.props.dispatch(updateProductTotal(this.props.item.basePrice))
        this.setState({
          msg: 'Added to Cart',
          color: 'success-btn'
        })
      }
    }
  }

  render(){
    let spClass = "spForm sp" + this.props.pos
    if (this.props.pos === 'Left' || this.props.pos === 'Right') {
      spClass += " spOverlay";
    }
    return(
      <div className={spClass}>
        <h3>{this.props.item.name}</h3>
        <p>{convertToDollars(this.props.item.basePrice)}</p>
        <p>DevCred: {this.props.item.devCred}</p>
        <p>{this.props.item.des}</p>
        <button onClick={this.purchase} className={"spBtn btn " + this.state.color }>{this.state.msg}</button>
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
