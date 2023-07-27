import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class ContactTitle extends Component {
  render () {
    return (
      <Col md="4">
        <h5><span className="line-title" />Contact</h5>
        <h2>Get In Touch</h2>
      </Col>
    );
  }
}
