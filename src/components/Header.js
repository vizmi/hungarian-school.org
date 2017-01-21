import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import texts from '../config/texts.json';

export default class Header extends Component {
  static propTypes = {
    language: React.PropTypes.string
  };

  render() {
    const txt = texts[this.props.language];
    return (
      <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">{txt['header.brand']}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/who">
              <NavItem eventKey={1}>{txt.whoAreWe}</NavItem>
            </LinkContainer>
            <LinkContainer to="/what">
              <NavItem eventKey={2}>{txt.whatWeDo}</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}>{txt.contact}</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
