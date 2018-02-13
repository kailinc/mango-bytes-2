import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import API from '../API';
import UIMessage from '../Components/UIMessage';

class ChangePwd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      old: '',
      new: '',
      changedPwd: false,
      ui: {
        type: '',
        msg: '',
        display: false
      }
    }
    this.onChangePwd = this.onChangePwd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.redirectToHome = this.redirectToHome.bind(this)
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

  onChangePwd(e) {
    e.preventDefault()
    const data = {
      passwords: this.state
    }
    const id = this.props.user.id
    const token = this.props.user.token
    API.changePassword(id, token, data)
      .then(() => {
        this.setState({
          old: '',
          new: ''
        })
      })
      .then(() => {
        this.setState({
          ui: {
            type: 'success',
            msg: 'Password change is successful! We are redirecting you to home page',
            display: true
          }
        })
        setTimeout(this.redirectToHome, 2000)
      })
      .catch((error) => {
        this.setState({
          ui: {
            type: 'error',
            msg: 'Passwords don\'t match',
            display: true
          }
        })
        console.log(error)
      })
  }

  redirectToHome() {
    this.setState({
      changedPwd: true
    })
  }

  render(){
    if (this.state.changedPwd) {
      return(
        <Redirect to='/' />
      )
    }

    return(
      <div>
        <div className='title'>
          <h1>Change Your Password</h1>
        </div>
        { this.state.ui.display ? <UIMessage type={this.state.ui.type}
                                            msg={this.state.ui.msg}
                                            unmountMe={this.handleChildUnmount} /> : null}
        <form onSubmit={this.onChangePwd}>
          <label>
            <input name='old' type="password" required value={this.state.old} onChange={this.handleInputChange}/>
            <div className="label-text">Old Password</div>
          </label>
          <label>
            <input name='new' type="password" required value={this.state.new} onChange={this.handleInputChange}/>
            <div className="label-text">New Password</div>
          </label>
          <button className='submit-button' >Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ChangePwd);
