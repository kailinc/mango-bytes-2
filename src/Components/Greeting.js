import React, { Component  } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  render(props){
    return(
      <div>
        <Jumbotron className="home landingPic">
          <div className="greeting">
            <div className='top'>
              <h3>Calling All Developers</h3>
              <h1>TALKERS, TALK</h1>
              <h1><span>BUILDERS, BUILD</span></h1>
              <p>What if I told you, you can spend money to become a better developer?</p>
            </div>

            <div className="bottom">
              <Link to='/all'>SHOP ALL</Link>
              <Link to='/points'>POINTS</Link>
              <Link to={{
                pathname: '/all',
                state: {
                  headline: 'STICKERS',
                  header: 'All Stickers',
                  msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
                }}}>STICKERS</Link>
              <Link to='/swag'>SWAG</Link>
              <Link to='/super-power'>SUPER POWER</Link>
              <Link to='/misc'>MISC</Link>
            </div>
          </div>

        </Jumbotron>
      </div>
    )
  }
}

export default Greeting;
