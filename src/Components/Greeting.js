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
              <Link to='/mango-bytes-2/all'>SHOP ALL</Link>
              <Link to='/mango-bytes-2/points'>POINTS</Link>
              <Link to='/mango-bytes-2/stickers'>STICKERS</Link>
              <Link to='/mango-bytes-2/swag'>SWAG</Link>
              <Link to='/mango-bytes-2/superpowers'>SUPER POWER</Link>
              <Link to='/mango-bytes-2/misc'>MISC</Link>
            </div>
          </div>

        </Jumbotron>
      </div>
    )
  }
}

export default Greeting;
