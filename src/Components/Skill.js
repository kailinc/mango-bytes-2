import React, { Component  } from 'react';

import { connect } from 'react-redux';


class Skill extends Component {
  render(){
    const exp = this.props.user.token ? this.props.user[this.props.skill] : 0
    return(
      <div>
        <p>{this.props.skill}: {exp} </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Skill);
