import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart,removeFromcart } from '../Reduxx/slice/cartSlice'
import { Table } from 'react-bootstrap'


function Cart() {

  const cartArray = useSelector((state)=>state.CartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [total,setTotal]=useState(0)
  const getcartTotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
useEffect(()=>{
  getcartTotal()
},[cartArray])

const handleCart=()=>{
  dispatch(emptyCart())
  alert("order placed succesfully")
  navigate('/')
}



  return (
    <div className='container' style={{marginTop:'100px'}}>
     {
      cartArray.length>0?
<div className='row mt-5'>
  <div className='col-lg-8'>
    <Table className='table shadow border'>
      <thead>
        <tr>
          <th>#</th>
          <th>product</th>
          <th>product images</th>
          <th>price</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {
          cartArray.map((products,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{products.title}</td>
              <td><img width={'100px'} height={'100px'} src={products.thumbnail} alt="" /></td>
              <td>{products.price}</td>
              <td><button onClick={()=>dispatch(removeFromcart(products.id))} className='btn' ><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          )
    
      )
        }
      </tbody>
    </Table>
  </div>

  <div className='col-lg-1'></div>
  <div className='col-lg-3'>

  <div className='border mt-3 rounded shadow p-2 w-100'>
    <h2 className='text-primary'>cart summary</h2>
    <h4>total products : <span>{cartArray.length}</span></h4>
    <h4 className='mt-3'>total :<span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
  </div >
  <div className="d-grid">
    <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check out</button></div>
</div>
</div>:<div style={{height:'100vh'}} className='w-100 d-flex flex-column jusify-content-center align-items-center'>

<img height={'500px'} width={'500px'} src="https://i.pinimg.com/originals/13/13/7d/13137d5f9dd7ce895b5f20fc726be2e0.gif" alt="" />
<h3 className='text-center text-danger'>cart is empty</h3>
<Link style={{textDecoration:"none"}} className='btn btn-warning' to={'/'}>back to home</Link>
</div>

}
    </div>
  )
}

export default Cart