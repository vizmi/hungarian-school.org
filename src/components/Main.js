import Style from '../style/sandstone.min.css';
import FixStyle from '../style/navbar-fix.css';
import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    language: React.PropTypes.string
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Header language={this.props.language}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {React.cloneElement(this.props.children, { language: this.props.language })}
          </Col>
        </Row>
      </Grid>
    );
  }
}
