import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className='Naver'>
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="#home"><h4>UrbanBazaar</h4></Navbar.Brand>
        
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" className='text-white navItems'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className='text-white navItems'>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className='text-white navItems'>Products</Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to="/single" className='text-white navItems'>single</Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
