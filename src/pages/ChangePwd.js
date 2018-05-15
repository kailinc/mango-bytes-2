import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import userAPI from '../API/user';
import Form from '../Components/Form';

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
    this.updateValue = this.updateValue.bind(this)
    this.redirectToHome = this.redirectToHome.bind(this)
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
  }

  handleChildUnmount(){
    this.setState({ui: { display:false }});
  }

  updateValue(field, value) {
    this.setState({
      [field]: value
    })
  }

  onChangePwd(e) {
    e.preventDefault()
    const data = {
      passwords: this.state
    }
    const id = this.props.user.id
    const token = this.props.user.token
    userAPI.changePassword(id, token, data)
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

    const fields = Object.keys(this.state).filter((cur) => cur === 'old' || cur === 'new').map((cur) => {
        return { label: cur, value: this.state[cur], size: 'half' }
    })

    return(
      <div>
        <div className='title'>
          <h1>Change Your Password</h1>
        </div>
        <Form fields={fields} updateValue={this.updateValue} uiType={this.state.ui.type} uiMsg={this.state.ui.msg} unmountMe={this.handleChildUnmount} onSubmit={this.onChangePwd} uiDisplay={this.state.ui.display}/>
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
