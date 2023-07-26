import React, {Component} from 'react';
import {NavbarBrand} from 'reactstrap';
import logo from '../../images/logo.png';

export default class NavBrand extends Component {
  render () {
    return (
      <div>
        <NavbarBrand href="/" className="d-flex">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
            className="me-2"
          />
          <h2>TAWON</h2>
        </NavbarBrand>

      </div>
    );
  }
}
