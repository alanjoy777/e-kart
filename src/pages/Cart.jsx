import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptycart, removeFromCart } from '../redux/slice/cartSlice'

function Cart() {


  const{cart}=useSelector(state=>state.cartReducer)
  const[total,setTotal]=useState(0)


  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  },[cart])


const dispatch=useDispatch()
  return (
    <div className='container' style={{marginTop:"100px"}}>
{   cart?.length>0?
      <div className="row mt-5">
         <div className="col-lg-8">
              <table className='table shadow'>
                 <thead>
                   <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Quantity</th>
                    <th>Price</th>
                   </tr>

                 </thead>

                 <tbody>
                   { cart?cart.map((item,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td><img style={{width:"200px",height:"200px"}} src={item.thumbnail} alt="" /></td>
                        <td className='text-center'>{item.quantity}</td>
                        <td>${item.totalPrice}</td>
                        <td> <button onClick={()=>dispatch(removeFromCart(item.id))}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                       </tr>
                   )):<div></div>
                 }
                 </tbody>
              </table>
              <div className="d-flex justify-content-between">
                 <button className='btn btn-danger' onClick={()=>dispatch(emptycart())}>Empty Cart</button>
                 <Link to={'/'} style={{textDecoration:"none"}} className='btn btn-success'>Shop More</Link>
              </div>
         </div>
         <div className="col-lg-1">

         </div>
         <div className="col-lg-3 ">
         <div className="container border rounded shadow mt-5 p-5 w-85">
            <h2>Cart Summary</h2>
            <h4>Total Products:{ cart?.length}</h4>
            <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
         </div>
         <div className="d-grid">
           <button className='btn btn-success mt-2 rounded'>Checkout</button>
         </div>
         </div>
      </div>: <div className='d-flex justify-content-center'> 
  <img src="https://www.maloosgourmet.com/img/empty_cart.gif" alt="" />
</div>
      }
      
    </div>
  )
}

export default Cart
