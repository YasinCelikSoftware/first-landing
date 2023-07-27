import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Slide from './Slide';
import './OurPortfolio.css';

export default class OurPortftolio extends Component {
  render () {
    return (
      <section id="our-portfolio">
        <Container className="our-portfolio-container mt-5">
          <Row className="p-5 our-portfolio-row">
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
