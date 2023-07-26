import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import './AboutUs.css';
import AboutPhoto from './AboutPhoto';
import AboutTitle from './AboutTitle';

export default class About extends Component {
  render () {
    return (
      <section id="about-us">
        <Container className="my-5 about-container">
          <Row className="py-5 about-row justify-content-evenly">
            <AboutPhoto />
            <AboutTitle />
          </Row>
        </Container>
      </section>
    );
  }
}
