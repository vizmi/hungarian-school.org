import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import texts from '../config/texts.json';

export default class ContactPage extends Component {
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
            <h2>{txt.contact}</h2>
            <Well bsSize="small">
              <p>{txt['contact.classRoomAddress.head']}:</p>
              <address>
                1475 N. Broadway<br />
                Walnut Creek<br />
                CA 94596<br />
                USA<br />
              </address>
            </Well>
            <Well bsSize="small">
              <p>{txt['contact.mailAddress.head']}:</p>
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
              <p> {txt['contact.email']}:
                <a href="mailto:hungarianschool2016@gmail.com">hungarianschool2016@gmail.com</a>
              </p>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}
