import React, {Component} from 'react';
import {Col} from 'reactstrap';
import mySvg from '../../../images/about.jpg';

export default class AboutPhoto extends Component {
  render () {
    return (
      <Col md="3" className="about-us-photo py-5 px-0">
        <img src={mySvg} className="img-fluid" alt="about" width={'350px'} />
      </Col>
    );
  }
}
