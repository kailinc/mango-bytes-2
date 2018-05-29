import React, { Component } from 'react';
import { connect } from 'react-redux';

import userAPI from '../API/user';
import cartAPI from '../API/cart';
import { signIn } from '../actions/user';
import { updateId } from '../actions/cart';

import BackBtn from './BackBtn';
import Form from './Form';

class ForceLogin extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      coderName: '',
      email: '',
      password: '',
      password_confirmation: '',
      signedUp: false,
      loggedIn: false,
      ui: {
        msg: '',
        type: '',
        display: false
      }
    }

    this.updateValue = this.updateValue.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  componentWillMount() {
    if (this.props.user.token) {
      this.props.handleAdvance();
    }
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
    })
  }

  onSignUp(e) {
    e.preventDefault()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    if (this.state.password !== this.state.password_confirmation) {
      console.log('this is password', this.state.password)
      console.log('this is password_confirmation', this.state.password_confirmation)
      this.setState({
        ui: {
          type: 'error',
          msg: 'Sorry the passwords don\'t match. Please try again.',
          display: true
        }
      })
    } else {
      const data = {
        credentials: this.state
      }
      userAPI.signUp(data)
        .then((response) => {
          this.setState({
            ui: {
              type: 'success',
              msg: 'Yes! You have signed up for an account. We are logging you in.',
              display: true
            }
          })
        })
        .then(() => {
          this.signIn()
        })
        .catch((error) => {
          this.setState({
            ui: {
              type: 'error',
              msg: 'This account is already taken. Please try again.',
              display: true
            }
          })
          console.log(error)
        })
      }
  }

  signIn() {
    let data = {
      credentials: this.state
    }
    userAPI.signIn(data)
      .then((response) => {
        this.props.dispatch(signIn(response.data.user))
      })
      .then(() => {
        let data = {
          cart: {
            items: this.props.cart.items
          }
        }
        cartAPI.create(this.props.user.token, data)
          .then((response) => this.props.dispatch(updateId(response.data.cart.id)))
          .then(() => this.props.handleAdvance())
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        this.setState({
          ui: {
            type: 'error',
            msg: 'Incorrect email/password. Please try again.',
            display: true
          }
        })
        console.log(err)
      })
  }

  onSignIn(e) {
    e.preventDefault()
    this.signIn();
  }


  render() {
    const signUpfields = Object.keys(this.state).filter((cur) => cur !== 'ui' && cur !== 'signedUp' && cur !== 'loggedIn').map((cur) => {
        return { label: cur, value: this.state[cur], size: 'half' }
    })
    const signInfields = Object.keys(this.state).filter((cur) => cur === 'email' || cur === 'password').map((cur) => {
        return { label: cur, value: this.state[cur], size: 'half' }
    })

    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Sign Up/Log In</h3>
        </div>
        <div className="cart-table">
          <BackBtn backward={this.props.handleBackward}/>
          <div className="">

            <div className="right">
              <p>Sign Up</p>
                <Form fields={signUpfields} updateValue={this.updateValue} uiType={this.state.ui.type} uiMsg={this.state.ui.msg} unmountMe={this.handleChildUnmount} onSubmit={this.onSignUp} uiDisplay={this.state.ui.display}/>
            </div>

            <div className="left">
              <p>Sign In</p>
                <Form fields={signInfields} updateValue={this.updateValue} uiType={this.state.ui.type} uiMsg={this.state.ui.msg} unmountMe={this.handleChildUnmount} onSubmit={this.onSignIn} uiDisplay={this.state.ui.display}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ForceLogin);
