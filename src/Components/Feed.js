import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Feed extends Component {
  render() {
    return(
      <div className='feed-container'>
        <div>
          <NavDropdown eventKey={2} title="Sort By" id="basic-nav-dropdown" href="#">
            <LinkContainer to="/view-profile" activeClassName="is-active" exact={true}>
              <MenuItem>NEWEST ADDED</MenuItem>
            </LinkContainer>
            <LinkContainer to="/change-pwd" activeClassName="is-active" exact={true}>
              <MenuItem>PRICE HIGH-LOW</MenuItem>
            </LinkContainer>
            <LinkContainer to="/log-out" activeClassName="is-active" exact={true}>
              <MenuItem>PRIVE LOW-HIGH</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </div>
      </div>
    )
  }
}

export default Feed;
