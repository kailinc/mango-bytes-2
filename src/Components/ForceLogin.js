import React, { Component } from 'react';
import { connect } from 'react-redux';

import userAPI from '../API/user';

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
              msg: 'Yes! You have signed up for an account. Please login to continue.',
              display: true
            }
          })
        })
        .then(() => {
          let data = {
            credentials: this.state
          }
          this.onSignIn())
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

  onSignIn(e) {
    e.preventDefault();
    let data = {
      credentials: this.state
    }
    userAPI.signIn(data)
      .then(() => cartAPI.create())
      .catch((err) => console.log(err) )
  }



  render() {
    const signUpfields = Object.keys(this.state).filter((cur) => cur !== 'ui' && cur !== 'signedUp' && cur !== 'loggedIn').map((cur) => {
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
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ForceLogin);
