import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return(
      <div className='profile-container'>
        <div className='aside-container'>
          <div className='left'>
            <h3>100 +2</h3>
            <h5>Kailin </h5>
            <h5>Chen</h5>
          </div>
          <div className='right'>
            <img src='https://www.shareicon.net/data/128x128/2016/09/15/829444_man_512x512.png'></img>
          </div>
        </div>
        <div className='profile-hr'>
          <p>KaiBoard</p>
        </div>
        <div className='aside-container'>
          <div className='left'>
            <p>JavaScript: 0 <span className='increase-pts'>+2</span></p>
            <p>Python: 0 +2</p>
            <p>C: 0 +2</p>
            <p>C#: 0 +2</p>
            <p>C++: 0 +2</p>
            <p>CSS: 0 +2</p>
            <p>GO: 0 +2</p>
            <p>HTML: 0 +2</p>
            <p>JAVA: 0 +2</p>
            <p>Ruby: 0 +2</p>
          </div>
          <div className='right'>
            <p>Angular: 0 +2</p>
            <p>React: 0 +2</p>
            <p>BootStrap: 0 +2</p>
            <p>Django: 0 +2</p>
            <p>Ember: 0 +2</p>
            <p>MongoDB: 0 +2</p>
            <p>MySQL: 0 +2</p>
            <p>Node: 0 +2</p>
            <p>Rails: 0 +2</p>
            <p>SASS: 0 +2</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
