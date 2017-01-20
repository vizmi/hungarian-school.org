import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import texts from '../config/texts.json';

export default class WhatPage extends Component {
  static propTypes = {
    language: React.PropTypes.string
  };

  render() {
    const txt = texts[this.props.language];

    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2>{txt.whatWeDo}</h2>
            <p>{txt['what.para1']}</p>
            <p>{txt['what.para2']}</p>
            <p>{txt['what.para3']}: <Link to="contact">{txt.contact}</Link>.
            </p>
            <h3>{txt['what.bigKids.head']}</h3>
            <p>{txt['what.bigKids.para1']}</p>
            <p>{txt['what.bigKids.para2']}</p>
            <h4>{txt['what.baboca.head']}</h4>
            <p>{txt['what.baboca.para']}</p>
            <h4>{txt['what.rumini.head']}</h4>
            <p>{txt['what.rumini.para']}</p>
            <h4>{txt['what.vuk.head']}</h4>
            <p>{txt['what.vuk.para']}</p>
            <h3>{txt['what.mini.head']}</h3>
            <p>{txt['what.mini.para']}</p>
            <h3>{txt['what.party.head']}</h3>
            <p>{txt['what.party.para']}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
