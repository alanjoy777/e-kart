import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home" >
          <Link to={'/'} style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>
             <i className='fa-solid fa-truck-fast fa-bounce'></i> E-CART
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className='btn btn-outline-light'>
              <Link to={'/wishlist'} style={{color:"black",fontWeight:"bold",textDecoration:"none"} }>
               <i className='fa-solid fa-heart text-danger'></i>Wishlist <Badge bg="light rounded ms-2">9</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link  className='btn btn-outline-light'>
              <Link to={'/cart'} style={{color:"black",fontWeight:"bold",textDecoration:"none"} }>
               <i className='fa-solid fa-cart-shopping text-warning'></i>Cart <Badge bg="light rounded ms-2">9</Badge>
              </Link>
            </Nav.Link>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
