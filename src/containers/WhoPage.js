import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class WhatPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2> Kik vagyunk? </h2>
            <p>
              Az East Bay Magyar Iskola ötlete 2015 nyarán született meg.
              Az ötletgazdák az San Francisco-i öböl keleti részén
              (vagy ahogy errefelé mondják: az East Bay Area-ban) élő,
              magyar származású szülők voltak.
              Az első tanév során az iskola bejegyzetlen non-profit státuszban üzemelt.
            </p>
            <p>
              A kezdeti szárnypróbálgatások bebizonyították, hogy van igény és érdeklődés
              az iskola tevékenységére.
              Az első sikeres tanév lezárást követően, 2016 nyarán került sor az
              iskola non-profit státuszának bejegyeztetésére.
              Ennek köszönhetően az iskola magasabb szinvonalú tanterembe költözhetett,
              és lehetővé vált adományok gyűjtése is.
            </p>
            <h3> Az East Bay Hungarian Educational Group </h3>
            <p>
              Az iskola szervezését és vezetését a Az East Bay Hungarian Educational Group
              non-profit szervezet végzi.
              A non-profit szervezet vezetősége:
            </p>
            <ul>
              <li> Rachidi Mária <small> Elnök </small> </li>
              <li> Vizhányóné Benda Szilvia <small> Igazgató, Titkár </small> </li>
              <li> Kohányi-Skov Ágnes <small> Igazgató, Pénztáros </small> </li>
              <li> Böröcz István <small> Igazgató </small> </li>
              <li> Geday Patricia <small> Igazgató </small> </li>
            </ul>
            <h3> Az East Bay Magyar Iskola </h3>
            <p>
              Az iskola oktatói:
            </p>
            <h4> Vizhányóné Benda Szilvia </h4>
            <p>
              Szilvia Kecskeméten született, és itt szerezte diplomáját is,
              Tanító - óvodapedagógos szakon.
              2013-ban költözött Kaliforniába családjával.
              2 gyermeke rendszeresen jár a magyar iskola foglalkozásaira.
            </p>
            <h4> Wallace Juliann </h4>
            <p>&nbsp;</p>
            <h4> Pázmándi Hagen Erika </h4>
            <p>&nbsp;</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
