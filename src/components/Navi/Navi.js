import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
} from 'reactstrap';
import NavBrand from './NavBrand';
import './Navi.css';
import {useEffect} from 'react';

function Navi (args) {
  const [isOpen, setIsOpen] = useState (false);
  const [stickyClass, setStickyClass] = useState ('relative');

  const toggle = () => setIsOpen (!isOpen);

  useEffect (() => {
    window.addEventListener ('scroll', stickyNavbar);
    return () => {
      window.removeEventListener ('scroll', stickyNavbar);
    };
  }, []);

  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log (windowHeight);
      windowHeight > 50
        ? setStickyClass ('bg-white')
        : setStickyClass ('bg-transparent');
    }
  };

  return (
    <Navbar
      {...args}
      expand="md"
      className={`px-10 ${stickyClass}`}
      fixed="top"
    >
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
            <NavLink href="#our-services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#our-portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#testimonial">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navi;
