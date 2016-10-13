import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  static propTypes = {
  };

  render() {
    return (
      <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">East Bay Magyar Iskola</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/who">
              <NavItem eventKey={1}> Kik vagyunk? </NavItem>
            </LinkContainer>
            <LinkContainer to="/what">
              <NavItem eventKey={2}> Mit csinálunk? </NavItem>
            </LinkContainer>
            <LinkContainer to="/join">
              <NavItem eventKey={3}> Hogyan tudok csatlakozni? </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}> Elérhetőségeink </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
