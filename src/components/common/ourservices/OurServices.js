import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import OurServicesTitle from './OurServicesTitle';
import OurServicesContent from './OurServicesContent';

export default class OurServices extends Component {
  render () {
    return (
      <section id="our-services">
        <Container className="our-services-container">
          <Row className="our-services-row p-5">
            <OurServicesTitle />
            <OurServicesContent />
          </Row>
        </Container>
      </section>
    );
  }
}
