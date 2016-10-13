import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default class WhatPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2> Mit csinálunk? </h2>
            <p>
              A Magyar Iskola célja hogy segítsen a tanulóinak megőrizni
              a magyar nyelv és a kultúra értékeit.
            </p>
            <p> Ezt elsősorban tantermi foglalkozások, másodsorban egyéb szabadidős programok
              keretében igyekszünk véghezvinni.
            </p>
            <p>
              Foglalkozásainkat szinte minden esetben az iskola tantermében tartjuk,
              aminek
              <Link to="contact">címét itt találod</Link>.
            </p>
            <h3> Nagyok foglalkozásai </h3>
            <p>
              A nagyok foglalkozásait minden második héten vasárnaponként tartjuk,
              az iskola tantermében. </p>
            <p>
              A foglalkozások pontos ütemezéséről az eseménynaptárunkban tájékozódhatsz.
            </p>
            <h4> Babóca csoport </h4>
            <p>
              Mi történik a Babóca csoportban?
              Ide azok 4-6 eves gyerekek járnak, akiknél a magyar nyelv szókincsének bővitése
              mellett játékos formában ismerkedünk a magyar szokásokkal, népi játékok, versek,
              mondókák segítségével.
            </p>
            <h4> Rumini csoport </h4>
            <p>
              Ebbe a csoportba azok a gyerekek járnak, akik jól beszélnek magyarul es készek arra,
              hogy megtanuljanak magyarul olvasni-irni. Néhányan közülük most kezdték el,
              másokkal a tavaly elkezdett munkát folytatjuk,
              erősen koncentrálva a Magyar ABC-ben előforduló betűk felismerésére,
              az olvasott szöveg megértésére, a gyerekek olvasóvá nevelésére. </p>
            <h4> Vuk csoport </h4>
            <p> </p>
            <h3> Mini csoport </h3>
            <p>
              A mini csoportba a legkisebbeket várjuk, minden hónap első vasárnapján tantermünkben.
            </p>
            <h3> Partik, egyéb rendezvények </h3>
            <p>
              Változatos helyszineken és programokkal várunk,
              a részleteket az eseménynaptárunkban találod!
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
