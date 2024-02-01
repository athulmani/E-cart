import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Reduxx/slice/wishlist'
import { addtoCart } from '../Reduxx/slice/cartSlice'



function Whishlist()  {

  const whishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  // console.log(whishlistArray);

  const handleWishListCart = (products)=>{
    dispatch(addtoCart(products))
    dispatch(removeFromWishlist(products.id))
  }
  return (

    <div style={{marginTop:'100px'}}>
    <Row>
      {
        whishlistArray.length>0?
        whishlistArray.map((products,index)=>(

          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>

          <Card className='shadow rounded' style={{ width: '19rem',height:'30rem' }}>
            <Card.Img height={"200px"} variant="top" src={products?.thumbnail} />
            <Card.Body>
              <Card.Title>{products?.title}</Card.Title>
              <Card.Text>
                <p>
                  {products?.description.slice(0,55)}....
                </p>
                <h5>${products?.price}</h5>
              </Card.Text>
              <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(removeFromWishlist(products.id))} className='btn' ><i class="fa-solid fa-trash"></i></Button>
              <Button onClick={()=>handleWishListCart(products)} className='btn'><i class="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
          </Card>
          </Col>

        )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column jusify-content-center align-items-center'>

          <img height={'500px'} width={'500px'} src="https://i.pinimg.com/originals/13/13/7d/13137d5f9dd7ce895b5f20fc726be2e0.gif" alt="" />
          <h3 className='text-center text-danger'>wishlist is empty</h3>
          <Link style={{textDecoration:"none"}} className='btn btn-warning' to={'/'}>back to home</Link>
        </div>

      }
    </Row>
    </div>
  )
}
export default Whishlist