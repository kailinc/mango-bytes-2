import React, { Component } from 'react';

import notFound from '../assets/notFound.jpg';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFoundCon">
        <div className="errorInfo">
          <h1>Even the things we love break sometimes</h1>
          <h3>Thanks for your patience while we put the pieces back together.</h3>
          <p>In the meantime, you can...</p>
          <ul className="redirect">
            <li>Shop through AWESOME items on this <Link to="/mango-bytes-2/all">page</Link></li>
            <li>Give this project a star on <a href="https://github.com/kailinc/mango-bytes-2">GitHub.</a></li>
            <li>Donate Bitcoin/Ethereum/Litecoin to me!</li>
          </ul>
        </div>
        <div>
          <img alt="sad pug" src={notFound}/>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;
