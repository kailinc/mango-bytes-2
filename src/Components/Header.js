import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = (props) => {
  return (<div className="header">
    <p className="headline">FREE Shipping on Orders Paid with Bitcoin.</p>
    <Navbar collapseOnSelect>
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
          <LinkContainer to="/points" activeClassName="is-active" exact={true}>
            <NavItem>POINTS</NavItem>
          </LinkContainer>
          <LinkContainer to="/stickers" activeClassName="is-active" exact={true}>
            <NavItem>STICKERS</NavItem>
          </LinkContainer>
          <LinkContainer to="/swag" activeClassName="is-active" exact={true}>
            <NavItem>SWAG</NavItem>
          </LinkContainer>
          <LinkContainer to="/super-powers" activeClassName="is-active" exact={true}>
            <NavItem>SUPER POWERS</NavItem>
          </LinkContainer>
          <LinkContainer to="/misc" activeClassName="is-active" exact={true}>
            <NavItem>MISC</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          {props.user.token ? <LoggedIn coderName={props.user.coderName}/> : <NotLoggedIn /> }
          <LinkContainer to="/checkout" activeClassName="is-active" exact={true}>
            <NavItem>CART</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>)
}

const LoggedIn = (props) => (
  <NavDropdown eventKey={2} title={props.coderName} id="basic-nav-dropdown" href="#">
    <LinkContainer to="/view-profile" activeClassName="is-active" exact={true}>
      <MenuItem>VIEW PROFILE</MenuItem>
    </LinkContainer>
    <LinkContainer to="/change-pwd" activeClassName="is-active" exact={true}>
      <MenuItem>CHANGE PASSWORD</MenuItem>
    </LinkContainer>
    <LinkContainer to="/log-out" activeClassName="is-active" exact={true}>
      <MenuItem>LOG OUT</MenuItem>
    </LinkContainer>
  </NavDropdown>
)

const NotLoggedIn = (props) => (
  <NavDropdown eventKey={2} title="MEMBERS" id="basic-nav-dropdown" href="#">
      <LinkContainer to="/sign-up" activeClassName="is-active" exact={true}>
        <MenuItem>SIGN UP</MenuItem>
      </LinkContainer>
      <LinkContainer to="/log-in" activeClassName="is-active" exact={true}>
        <MenuItem>LOG IN</MenuItem>
      </LinkContainer>
  </NavDropdown>
)

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);
