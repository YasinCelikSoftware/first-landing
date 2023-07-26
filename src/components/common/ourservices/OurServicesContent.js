import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {
  faFileCode,
  faCode,
  faW,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './OurServices.css';

export default class OurServicesContent extends Component {
  render () {
    return (
      <Col md="6">
        <Row>
          <Col md="6">
            <FontAwesomeIcon icon={faFileCode} />
            <h5>CSS</h5>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Col>
          <Col md="6">
            <FontAwesomeIcon icon={faCode} />
            <h5>HTML</h5>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6">
            <FontAwesomeIcon icon={faW} />
            <h5>WordPress</h5>
            <p>Lorem ipsum dolor sit amet consectetur</p>

          </Col>
          <Col md="6">
            <FontAwesomeIcon icon={faRobot} />
            <h5>Android</h5>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </Col>
        </Row>
      </Col>
    );
  }
}
