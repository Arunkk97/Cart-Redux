import React from 'react'
import { Badge, Container, Nav, Navbar, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/slices/productSlice'



function Header({ insideHome }) {

  const wishlistCount = useSelector(state => state.wishlistReducer).length
  const cartCount = useSelector(state => state.cartReducer).length
  const dispatch=useDispatch()

  return (
    <>
      <Navbar style={{ zIndex: '10' }} expand="lg" className="bg-info position-fixed w-100 top-0">
        <Container >
          <Navbar.Brand className='fw-bolder  '><Link style={{ textDecoration: 'none' }} to={'/'}><i className="fa-solid fa-truck-fast text-light"> E Kart</i> </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {insideHome &&
                <Nav.Link >
                  <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '400px' }} type="text" className='form-control me-5' placeholder='Search' />
                </Nav.Link>
              }

              <Nav.Link > <Link style={{ textDecoration: 'none' }} to={'/wishlist'}><i style={{ height: '17px' }} class="fa-solid fa-heart "></i>Wishlist <Badge bg="secondary">{wishlistCount}</Badge> </Link></Nav.Link>
              <Nav.Link > <Link style={{ textDecoration: 'none' }} to={'/cart'}><i style={{ height: '17px' }} class="fa-solid fa-cart-shopping "></i>Cart <Badge bg="secondary">{cartCount}</Badge></Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header