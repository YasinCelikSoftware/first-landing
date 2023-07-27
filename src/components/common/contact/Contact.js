import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';
import './Contact.css';

export default class Contact extends Component {
  render () {
    return (
      <section id="contact">
        <Container className="contact-container mt-5">
          <Row className="contact-row p-5">
            <ContactTitle />
            <ContactForm />
          </Row>
        </Container>
      </section>
    );
  }
}
