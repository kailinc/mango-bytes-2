import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
      <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
      </nav>
  </header>
)


export default Header;
