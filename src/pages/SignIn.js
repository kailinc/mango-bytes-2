import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/user';
import { setCurCart } from '../actions/cart';
import API from '../API';
import UIMessage from '../Components/UIMessage';
import { getCurCart } from '../helpers/cart';

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
    API.signIn(data)
      .then((response) => {
        this.props.dispatch(signIn(response.data.user))
        return [response.data.user.id, response.data.user.token]
      })
      .then((data) => API.getOwnCart(data[0], data[1]))
      .then((response) => response.data.carts.filter((cart) => !cart.isPaid))
      .then((data) => this.props.dispatch(setCurCart(data[0].items)))
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

export default connect()(SignIn);
