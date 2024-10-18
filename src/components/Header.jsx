import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../redux/slice/productSlice';

function Header() {

  
  const dispatch=useDispatch()

  const location=useLocation()
  const[wishlistCount,SetWishlistCount]=useState(0)
const[cartCount,SetcartCount]=useState(0)
  const{wishlist}=useSelector((state)=>state.wishlistReducer)
  const[orderCount,setOrderCount]=useState(0)
  const{cart, orders}=useSelector(state=>state.cartReducer)
  // console.log(cart);
  


  
  
  useEffect(() => {
    SetWishlistCount(wishlist.length);
    SetcartCount(cart.length)
    setOrderCount(orders.length)
  }, [wishlist,cart]);
  

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

           
           { location.pathname== '/'?
            <Nav.Link >
              <input type="text" onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))} className='form-control' style={{width:"500px"}} placeholder='Search Products' />
            </Nav.Link>:null
}
            <Nav.Link  className='btn btn-outline-light'>
              <Link to={'/wishlist'} style={{color:"black",fontWeight:"bold",textDecoration:"none"} }>
               <i className='fa-solid fa-heart text-danger'></i>Wishlist <Badge bg="light rounded ms-2">{wishlistCount}</Badge>
              </Link>
            </Nav.Link>

            <Nav.Link  className='btn btn-outline-light'>
              <Link to={'/cart'} style={{color:"black",fontWeight:"bold",textDecoration:"none"} }>
               <i className='fa-solid fa-cart-shopping text-warning'></i>Cart <Badge bg="light rounded ms-2">{cartCount}</Badge>
              </Link>
            </Nav.Link>

            <Nav.Link  className='btn btn-outline-light'>
              <Link to={'/orders'} style={{color:"black",fontWeight:"bold",textDecoration:"none"} }>
               Orders <Badge bg="light rounded ms-2">{orderCount}</Badge>
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
