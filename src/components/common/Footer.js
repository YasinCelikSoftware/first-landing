import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import './Footer.css';

export default class Footer extends Component {
  render () {
    return (
      <section id="footer">
        <Container className="mt-5 footer-container">
          <Row className="p-5 footer-row">
            <Col className="text-center">
              <h6 style={{color: '#00000050'}}>
                Copyright © All Right Reserved
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
