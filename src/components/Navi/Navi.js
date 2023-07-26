import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import NavBrand from './NavBrand';
import './Navi.css';

function Navi (args) {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => setIsOpen (!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="px-5">
        <NavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Contact Us</NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
