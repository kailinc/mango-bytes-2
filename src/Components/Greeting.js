import React, { Component  } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Greeting extends Component {
  render(props){
    return(
      <div>
        <Jumbotron className="home">
          <div className="greeting">
            <div className='top'>
              <h3>Calling All Developers</h3>
              <h1>TALKERS, TALK</h1>
              <h1><span>BUILDERS, BUILD</span></h1>
              <p>What if I told you, you can spend money to become a better developer?</p>
            </div>

            <div className="bottom">
              <button>SHOP ALL</button>
              <button>POINTS</button>
              <button>STICKERS</button>
              <button>SWAG</button>
              <button>MISC</button>
            </div>
          </div>

        </Jumbotron>
      </div>
    )
  }
}

export default Greeting;
