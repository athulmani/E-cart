import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addtoWishlist } from '../Reduxx/slice/wishlist';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Reduxx/slice/cartSlice';



function Home() {
  const data=useFetch("https://dummyjson.com/products")
  // console.log(data);
  const dispatch=useDispatch()
  return (
    <div>
      
<Row className='ms-5' style={{marginTop:'100px'}}>
{
  data?.length>0.?data?.map((products,index)=>(

  
<Col className='mb-5' sm={12} md={6} lg={4} xl={3}  >
<Card style={{ width: '18rem',height:'30rem' }}>
      <Card.Img style={{height:"170px"}} variant="top" src={products.thumbnail} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>{products.title}</Card.Title>
            {/* <h6 style={{color:"black"}}>discount  {products.discountPercentage}%</h6> */}
            {/* <h6 style={{color:"green"}}>{products.rating} <i class="fa-solid fa-star"></i></h6> */}

        <Card.Text style={{color:"black"}}>
          <p>{products?.description.slice(0,55)}</p>
         {/* {products.description} */}
        </Card.Text>
        <h3 style={{color:"black"}}>${products.price}.0</h3>     

        {/* <h6 style={{color:"red"}}>only ({products.stock}) left</h6> */}
        <div className='d-flex justify-content-between '>
        <Button onClick={()=>dispatch(addtoWishlist(products))} variant="primary"><i class="fa-solid fa-heart fa-beat-fade"></i> </Button>
        <Button onClick={()=>dispatch(addtoCart(products))}  variant="primary"><i class="fa-solid fa-cart-shopping fa-beat-fade"></i> </Button>
        </div>
     
      </Card.Body>
    </Card>
</Col>
)

):<p className='text-danger fs-4 fw-bolder'>nothing to display</p>
}
</Row>

      
    </div>
  )
}

export default Home