import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class TestimonialTitle extends Component {
  render () {
    return (
      <Col md="6">
        <h5 className="d-flex"><span className="line-title" />Testimonial</h5>
        <h2>Client Feedback</h2>
      </Col>
    );
  }
}
