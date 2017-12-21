import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/" activeClassName="is-active" exact={true}>Mango-Bytes</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <NavLink to="/languages" activeClassName="is-active" exact={true}>Languages</NavLink>
        </NavItem>
        <NavItem eventKey={2}>
          <NavLink to="/merchandise" activeClassName="is-active" exact={true}>Merchandise</NavLink>
        </NavItem>
        <NavItem eventKey={3}>
          <NavLink to="/misc" activeClassName="is-active" exact={true}>Misc</NavLink>
        </NavItem>
        <NavItem eventKey={4}>
          <NavLink to="/super-powers" activeClassName="is-active" exact={true}>Super Powers</NavLink>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={2} title="User" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}>Sign Up</MenuItem>
          <MenuItem eventKey={2.2}>Login</MenuItem>
          <MenuItem eventKey={2.3}>Change Password</MenuItem>
          <MenuItem eventKey={2.4}>View Profile</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.5}>Log Out</MenuItem>
        </NavDropdown>

        <NavItem eventKey={1}>
          <NavLink to="/cart" activeClassName="is-active" exact={true}>Cart</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


export default Header;
