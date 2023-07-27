import React, {Component} from 'react';
import {Col, Form, Row, FormGroup, Label, Input, Button} from 'reactstrap';
import SeeMoreButton from '../../buttons/SeeMoreButton';

export default class ContactForm extends Component {
  render () {
    return (
      <Col md="8">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                />
                <Label for="fullName">
                  Full Name
                </Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <Input
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                <Label for="email">
                  E-mail
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup floating>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              type="text"
            />
            <Label for="subject">
              Subject
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="message"
              name="message"
              placeholder="Enter Message"
              type="textarea"
            />
            <Label for="message">
              Your Message
            </Label>
          </FormGroup>

          <SeeMoreButton
            content="Contact"
            onClick={e => {
              e.preventDefault ();
            }}
            type="submit"
          />
        </Form>

      </Col>
    );
  }
}
