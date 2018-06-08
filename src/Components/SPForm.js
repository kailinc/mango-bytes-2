import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addItem, updateDevCred, updateProductTotal, updateId } from '../actions/cart';
import { convertToDollars } from '../helpers/cart';
import cartAPI from '../API/cart';

class SPForm extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Buy',
      color: 'promo-btn'
    }

    this.purchase = this.purchase.bind(this)
    this.formatItem = this.formatItem.bind(this)
    this.updateCartAPI = this.updateCartAPI.bind(this)
    this.createCartAPI = this.createCartAPI.bind(this)
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
        if (this.props.cart.items.length === 0 ) {
          this.createCartAPI(item);
        } else {
          this.updateCartAPI();
        }
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

  updateCartAPI() {
    if (this.props.user.token) {
      let data = {
        cart: {
          items: this.props.cart.items
        }
      }
      cartAPI.update(this.props.cart.id, this.props.user.token, data)
        .then(() => {
          if (this.props.cart.items.length === 0) {
            cartAPI.destroy(this.props.cart.id, this.props.user.token)
              .then(() => this.props.dispatch(updateId("")))
              .catch((err) => console.log(err))
          }
        })
        .catch((err) => console.log(err))
    }
  }

  createCartAPI (item) {
    if (this.props.user.token != null) {
      let data = {
        cart: {
          items: [item]
        }
      }
      cartAPI.create(this.props.user.token, data)
        .then((response) => this.props.dispatch(updateId(response.data.cart.id)))
        .catch((err) => console.log(err))
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
