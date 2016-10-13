import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class JoinPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2> Hogyan tudok csatlakozni? </h2>
          </Col>
        </Row>
      </Grid>
    );
  }
}
