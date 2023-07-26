import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Slide from './Slide';

export default class OurPortftolio extends Component {
  render () {
    return (
      <section id="our-portfolio">
        <Container>
          <Row>
            <Col>
              <h5><span className="line-title" />Our Portfolio</h5>
              <h2>Best Our Portfolio</h2>
              <Slide />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
