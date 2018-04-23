import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/user';
import { setCurCart, updateAttributes, updateId } from '../actions/cart';
import userAPI from '../API/user';
import cartAPI from '../API/cart';
import UIMessage from '../Components/UIMessage';
import { getCurCart, formatAttributes } from '../helpers/cart';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      ui: {
        msg: '',
        type: '',
        display: false
      }
    }
    this.onSignIn = this.onSignIn.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.close = this.close.bind(this)
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  onSignIn(e) {
    e.preventDefault()
    const data = {
      credentials: this.state
    }
    userAPI.signIn(data)
      .then((response) => {
        this.props.dispatch(signIn(response.data.user))
        return [response.data.user.id, response.data.user.token]
      })
      .then((data) => cartAPI.getOwnCart(data[0], data[1]))
      .then((response) => response.data.carts.filter((cart) => !cart.isPaid))
      .then((data) => {
        if (data.length > 0) {
          this.props.dispatch(setCurCart(data[0].items))
          this.props.dispatch(updateId(data[0].id))
        }
      })
      .then(() => {
        if (this.props.cart.items.length > 0) {
          this.props.cart.items.forEach((item) => {
            let attributes = formatAttributes(item.attributes)
            this.props.dispatch(updateAttributes(attributes, item.quantity))
          })
        }
      })
      .then(() => {
        this.setState({
          loggedIn: true
        })
      })
      .catch((error) => {
        this.setState({
          ui: {
            msg: "Incorrect email and passoword.",
            type: "error",
            display: true
          }
        })
        console.log(error)
      })
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  render(){
    if (this.state.loggedIn) {
      return(
        <Redirect to='/' />
      )
    }

    return(
      <div>
        <div className='title'>
          <h1>Welcome Back!</h1>
        </div>
        <form onSubmit={this.onSignIn}>
          { this.state.ui.display ? <UIMessage type={this.state.ui.type}
                                              msg={this.state.ui.msg}
                                              unmountMe={this.handleChildUnmount} /> : null}
          <label>
            <input name='email' type="email" required value={this.state.email} onChange={this.handleInputChange}/>
            <div className="label-text">Email</div>
          </label>
          <label>
            <input name="password" type='password' value={this.state.password} onChange={this.handleInputChange} required/>
            <div className="label-text">Password</div>
          </label>
          <button className='submit-button' >Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(SignIn);
