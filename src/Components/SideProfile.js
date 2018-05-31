import React, { Component } from 'react';
import Skill from './Skill';

import { connect } from 'react-redux';

class SideProfile extends Component {
  render() {
    const skillArray1 = ["JavaScript", "Angular", "C", "Css", "Django", "Ember", "Go", "Html"]
    const skillArray2 = ["Java", "MongoDB", "Sql", "Node", "Python", "Rails", "React", "Ruby"]
    const skill1 = <div className="left">
      { skillArray1.map(( skill, index ) => <Skill key={index} skill={skill}/>) }
      </div>
    const skill2 = <div className="right">
      { skillArray2.map(( skill, index ) => <Skill key={index} skill={skill}/>) }
      </div>
    return(
      <div className='profile-container'>
        <div className='aside-container'>
          <div className='left'>
            <h3>{this.props.user.token ? this.props.user.devCred : 'DevCred'}</h3>
            <h3>{this.props.user.token ? this.props.user.firstName : 'First'}</h3>
            <h3>{this.props.user.token ? this.props.user.lastName : 'Last'}</h3>
          </div>
          <div className='right'>
            <img src='https://www.shareicon.net/data/128x128/2016/09/15/829444_man_512x512.png' alt='profile'></img>
          </div>
        </div>
        <div className='profile-hr'>
          <p>{this.props.user.token ? this.props.user.coderName.toUpperCase() : 'CoderName'}</p>
        </div>
        <div className='aside-container'>
          {skill1}
          {skill2}
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

export default connect(mapStateToProps)(SideProfile);
