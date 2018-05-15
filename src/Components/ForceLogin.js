import React, { Component } from 'react';

import { connect } from 'react-redux';
import BackBtn from './BackBtn';

class ForceLogin extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    if (this.props.user.token) {
      this.props.handleAdvance();
    }
  }

  render() {
    return (
      <div className="cart-col">
        <div className="cart-header">
          <h3>Step 2. Sign Up/Log In</h3>
        </div>
        <div className="cart-table">
          <BackBtn backward={this.props.handleBackward}/>
          <div class="">

            <div class="right">
              <p>Sign Up</p>
            </div>

            <div class="left">
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
