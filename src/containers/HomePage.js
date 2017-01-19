import React, { Component } from 'react';
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import texts from '../config/texts.json';

export default class HomePage extends Component {
  static propTypes = {
    language: React.PropTypes.string
  };

  render() {
    const txt = texts[this.props.language];
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={8} smOffset={2}>
            <Carousel slide>
              <Carousel.Item>
                <Image responsive src={require('../img/community.jpg')} />
                <Carousel.Caption>
                  <h1>{txt['home.community.head']}</h1>
                  <h2>{txt['home.community.para']}</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image responsive src={require('../img/language.jpg')} />
                <Carousel.Caption>
                  <h1>{txt['home.language.head']}</h1>
                  <h2>{txt['home.language.para']}</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image responsive src={require('../img/culture.jpg')} />
                <Carousel.Caption>
                  <h1>{txt['home.culture.head']}</h1>
                  <h2>{txt['home.culture.para']}</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h3>{txt.whoAreWe}</h3>
            <p>{txt['home.whoAreWe.para']}</p>
            <p><Link to="who">{txt.moreInfo}</Link></p>
          </Col>
          <Col sm={4}>
            <h3>{txt.whatWeDo}</h3>
            <p>{txt['home.whatWeDo.para1']}</p>
            <p>{txt['home.whatWeDo.para2']}</p>
            <p><Link to="what">{txt.moreInfo}</Link></p>
          </Col>
          <Col sm={4}>
            <h3>{txt.howToJoin}</h3>
            <p>{txt['home.howToJoin.para1']}</p>
            <p><Link to="join">{txt.moreInfo}</Link></p>
            <p>{txt['home.howToJoin.para2']}</p>
            <p><Link to="contact">{txt.moreInfo}</Link></p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
