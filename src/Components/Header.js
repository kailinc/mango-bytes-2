import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" activeClassName="is-active" exact={true}>
          <a>Mango-Bytes 2.0</a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/languages" activeClassName="is-active" exact={true}>
          <NavItem>Languages</NavItem>
        </LinkContainer>
        <LinkContainer to="/merchandise" activeClassName="is-active" exact={true}>
          <NavItem>Merchandise</NavItem>
        </LinkContainer>
        <LinkContainer to="/misc" activeClassName="is-active" exact={true}>
          <NavItem>Misc</NavItem>
        </LinkContainer>
        <LinkContainer to="/super-powers" activeClassName="is-active" exact={true}>
          <NavItem>Super Powers</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={2} title="User" id="basic-nav-dropdown" href="#">
          <LinkContainer to="/sign-up" activeClassName="is-active" exact={true}>
            <MenuItem>Sign Up</MenuItem>
          </LinkContainer>
          <LinkContainer to="/log-in" activeClassName="is-active" exact={true}>
            <MenuItem>Log In</MenuItem>
          </LinkContainer>
          <LinkContainer to="/change-pwd" activeClassName="is-active" exact={true}>
            <MenuItem>Change Password</MenuItem>
          </LinkContainer>
          <LinkContainer to="/view-profile" activeClassName="is-active" exact={true}>
            <MenuItem>View Profile</MenuItem>
          </LinkContainer>
          <LinkContainer to="/log-out" activeClassName="is-active" exact={true}>
            <MenuItem>Log Out</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/cart" activeClassName="is-active" exact={true}>
          <NavItem>Cart</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;
