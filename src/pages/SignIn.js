import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/user';
import { setCurCart, updateAttributes, updateId } from '../actions/cart';
import userAPI from '../API/user';
import cartAPI from '../API/cart';
import { formatAttributes, formatItems } from '../helpers/cart';

import Form from '../Components/Form';

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
    this.close = this.close.bind(this)
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
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
      })
      .then(() => cartAPI.getOwnCart(this.props.user.id, this.props.user.token))
      .then((response) => response.data.carts.filter((cart) => !cart.isPaid))
      .then((data) => {
        if (data.length > 0) {
          let curCart = formatItems(data[0].items)
          this.props.dispatch(setCurCart(curCart))
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
    const fields = [{ label: 'email', value: this.state.email, size: 'half'},
                    { label: 'password', value: this.state.password, size: 'half'}];
    return(
      <div>
        <div className='title'>
          <h1>Welcome Back!</h1>
        </div>
        <Form fields={fields} updateValue={this.updateValue} uiType={this.state.ui.type} uiMsg={this.state.ui.msg} unmountMe={this.handleChildUnmount} onSubmit={this.onSignIn} uiDisplay={this.state.ui.display}/>
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

export default connect(mapStateToProps)(SignIn);
