import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
            <h2>{txt.whoAreWe}</h2>
            <p>{txt['who.para1']}</p>
            <p>{txt['who.para2']}</p>
            <h3> East Bay Hungarian Educational Group </h3>
            <p>{txt['who.hunSchool.para1']}:</p>
            <ul>
              <li> Rachidi Mária <small>{txt['who.president']}</small> </li>
              <li> Vizhányóné Benda Szilvia <small>{txt['who.director']},
                {txt['who.secretary']}</small> </li>
              <li> Kohányi-Skov Ágnes <small> {txt['who.director']},
                {txt['who.treasurer']}</small> </li>
              <li> Böröcz István <small>{txt['who.director']}</small> </li>
              <li> Geday Patricia <small>{txt['who.director']}</small> </li>
            </ul>
            <h3>{txt['who.hunSchool']}</h3>
            <p>{txt['who.hunSchool.para1']}:</p>
            <h4> Vizhányóné Benda Szilvia </h4>
            <p>{txt['who.hunSchool.Szilvia']}</p>
            <h4> Wallace Juliann </h4>
            <p>&nbsp;</p>
            <h4> Pázmándi Hagen Erika </h4>
            <p>{txt['who.hunSchool.Erika']}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
