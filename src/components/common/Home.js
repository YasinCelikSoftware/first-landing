import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import './Home.css';
import KnowMoreButton from '../buttons/KnowMoreButton';

export default class Home extends Component {
  render () {
    return (
      <section id="home">
        <Container className="home-container">
          <Row>
            <Col id="home-col">
              <div className="text-center mx-auto my-5">
                <h4>WE ARE</h4>
                <h1>Creative Digital<br /> Agency</h1>
                <KnowMoreButton content="Know More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
