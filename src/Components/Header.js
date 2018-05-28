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
          <LinkContainer to={{
            pathname: '/all',
            state: {
              headline: 'points',
              header: 'All Points',
              msg: ['There was only a few ways to become better at a language or a framework: read the documentation, take a class about it, or write a project using it. What if I told you there was an easier way? A much faster way. Here on Mango Bytes 2.0, you can buy experience in those languages and frameworks. #NoWork ']
            }}} activeClassName="is-active" exact={true}>
            <NavItem>POINTS</NavItem>
          </LinkContainer>
          <LinkContainer to={{
            pathname: '/all',
            state: {
              headline: 'sticker',
              header: 'All Stickers',
              msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
            }
          }} activeClassName="is-active" exact={true}>
            <NavItem>STICKERS</NavItem>
          </LinkContainer>
          <LinkContainer to={{
            pathname: '/all',
            state: {
              headline: 'swag',
              header: 'All Swag',
              msg: ['Atheletes have jerseys. Rappers have sun glasses. Instagram Fitness Baes have followers. But we are Matheletes. We have SWAG! When we rock them, we feel legit. We represent a programming language, framework, company, or database PROUDLY! ']
            }
          }} activeClassName="is-active" exact={true}>
            <NavItem>SWAG</NavItem>
          </LinkContainer>
          <LinkContainer to={{
            pathname: '/superpowers',
            state: {
              headline: 'superpower',
              header: 'All Super Powers',
              msg: ['Some coders just seem to write beautiful clean code, understand documentations easily, or refactor code like a machine. That is because they have super powers. You can get different super powers here. With great power comes great responsibility.']
            }
          }} activeClassName="is-active" exact={true}>
            <NavItem>SUPER POWERS</NavItem>
          </LinkContainer>
          <LinkContainer to={{
            pathname: '/all',
            state: {
              headline: 'misc',
              header: 'All Miscellaneous',
              msg: ['When you make it with Cryptocurrency, you buy a lambo. When you make it in Football, you get a tattoo. Youtube = Drones. BodyBuilder = Gym Shark Gear. Rapper = Gold Chains. Developers have different things they get when they make it. At heart, we are all kids just trying to have fun.']
            }
          }} activeClassName="is-active" exact={true}>
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
    <LinkContainer to="/user-profile" activeClassName="is-active" exact={true}>
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
