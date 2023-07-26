import React, {Component} from 'react';
import {Col} from 'reactstrap';
import SeeMoreButton from '../../buttons/SeeMoreButton';

export default class AboutTitle extends Component {
  render () {
    return (
      <Col md="5" className="py-5 text-left about-col">
        <h5><span className="line-title" />About Us</h5>
        <h2>Know More About Us</h2>
        <p>
          Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Dicta excepturi nostrum facere illum dignissimos, amet quibusdam. Suscipit ratione in consequuntur.
        </p>
        <SeeMoreButton />
      </Col>
    );
  }
}
