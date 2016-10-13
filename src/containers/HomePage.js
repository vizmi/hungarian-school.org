import React, { Component } from 'react';
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={8} smOffset={2}>
            <Carousel slide>
              <Carousel.Item>
                <Image responsive src={require('../img/community.jpg')} />
                <Carousel.Caption>
                  <h1>Közösség</h1>
                  <h2>Itt barátokra lelsz</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image responsive src={require('../img/language.jpg')} />
                <Carousel.Caption>
                  <h1>Nyelv</h1>
                  <h2>Gyakorolhatod az anyanyelved</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image responsive src={require('../img/culture.jpg')} />
                <Carousel.Caption>
                  <h1>Kultúra</h1>
                  <h2>Megismerkedhetsz a hagyományainkkal</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2> East Bay Magyar Iskola </h2>
            <p>
              Sok szeretettel köszöntelek az East Bay Magyar Iskola honlapján, kedves Látogató!
            </p>
            <h3> Kik vagyunk? </h3>
            <p> Az East Bay Magyar Iskola egy non-profit szervezet. A San Francisco-i Öböl
              keleti részén élő, magyar származású szülők hozták létre, akik szerették volna,
              ha gyermekeik megismerkednének a magyar nyelvvel, kultúrával.
              Az iskola teljes egészében önkéntes alapon működik.
              <Link to="who"> További információk... </Link>
            </p>
            <h3> Mit csinálunk? </h3>
            <p> Az iskola állandó programja a kétheti gyakorisággal,
              vasárnaponként tartott tantermi oktatás.
              Itt a gyerekek életkoruknak és nyelvismeretüknek megfelelő csoportokba beosztva
              tanulják a magyar nyelvet, dalokat, táncokat.
              Jelenleg 3 csoportunk van: </p>
            <ul>
              <li> Babóca csoport </li>
              <li> Rumini csoport </li>
              <li> Vuk csoport </li>
            </ul>
            <p>
              A tantermi oktatás mellett az iskola változatos programokat kínál a gyerekek
              és szüleik számára, hogy találkozzanak, megismerkedjenek más családokkal,
              és együtt jól érezzék magukat.
              Gyakoriak a kirándulások, piknikek, a különféle ünnepeket pedig
              tematikus összejövetelekkel tesszük emlékezetessé.
              <Link to="what"> További információk... </Link>
            </p>
            <h3> Hogyan tudok csatlakozni? </h3>
            <p>
              Az iskola szeretettel várja az Öböl környékén élő magyar származású,
              vagy a magyar kultúra iránt érdekődő gyermekeket, felnőtteket.
              <Link to="join"> További információk... </Link>
            </p>
            <p>
              Ha úgy érzed, hogy időt vagy pénzt áldoznál azért, hogy segítsd a munkánkat,
              ne tétovázz: az Iskolának minden segítségre szüksége van!
              <Link to="contact"> További információk... </Link>
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
