import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import TestimonialTitle from './TestimonialTitle';
import TestimonialContent from './TestimonialContent';

export default class Testimonial extends Component {
  render () {
    return (
      <section id="testimonial">
        <Container className="testimonial-container mt-5">
          <Row className="testimonial-row p-5">
            <TestimonialTitle />
            <TestimonialContent />
          </Row>
        </Container>
      </section>
    );
  }
}
