import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import wishlist from '../Reduxx/slice/wishlist';
// import cartlist from '../Reduxx/slice/cartSlice'

function Header() {

const wishlist= useSelector((state)=>state.wishlistReducer)

const cart= useSelector((state)=>state.CartReducer)


  return (
    <div>

<Navbar style={{zIndex:1}}  bgColor='transparent' expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:"blueviolet" ,fontWeight:"bold" , textDecoration:"none"}}><i class="fa-solid fa-truck-fast fa-bounce"></i>E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link> <Link to={'/Wishlist'} className='d-flex align-items-center' style={{textDecoration:"none", color:"red",fontWeight:"bold"}}><i class="fa-solid fa-heart fa-beat-fade">
              </i> Wishlist<Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
</Link> </Nav.Link>
            <Nav.Link> <Link to={'Cart'} className='d-flex align-items-center' style={{textDecoration:"none", color:"red",fontWeight:"bold"}}>
              <i class="fa-solid fa-cart-shopping fa-beat-fade"></i> Cart <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge></Link>  </Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header