import React, {Component} from 'react';
import {Col} from 'reactstrap';
import './OurServices.css';

export default class OurServicesTitle extends Component {
  render () {
    return (
      <Col md="6">
        <h5><span className="line-title" />Our Services</h5>
        <h2>Choose What You Like Our Services</h2>
      </Col>
    );
  }
}
