import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return(
      <div>
        <h3>Name: {this.props.user.name}</h3>
      </div>
    )
  }
}

export default Profile;
