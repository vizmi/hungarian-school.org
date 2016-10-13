import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

export default class ContactPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><Col><br /></Col></Row>
        <Row>
          <Col sm={10} smOffset={1}>
            <h2> Elérhetőségeink: </h2>
            <Well bsSize="small">
              <p> A tantermünk címe: </p>
              <address>
                1475 N. Broadway <br />
                Walnut Creek <br />
                CA 94596 <br />
                USA <br />
              </address>
            </Well>
            <Well bsSize="small">
              <p> Ha levelet szeretnél írni nekünk, az erre a címre teheted: </p>
              <address>
                <strong> East Bay Hungarian Educational Group </strong> <br />
                1655 N. California Bouleward <br />
                Apt. 310 <br />
                Walnut Creek <br />
                CA 94596 <br />
                USA <br />
              </address>
            </Well>
            <Well bsSize="small">
              <p> Email címünk:
                <a href="mailto:hungarianschool2016@gmail.com">hungarianschool2016@gmail.com</a>
              </p>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}
