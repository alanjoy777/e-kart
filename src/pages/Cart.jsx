import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='container' style={{marginTop:"100px"}}>

      <div className="row mt-5">
         <div className="col-lg-8">
              <table className='table shadow'>
                 <thead>
                   <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                   </tr>

                 </thead>

                 <tbody>
                   <tr>
                    <td>1</td>
                    <td>Product</td>
                    <td><img style={{width:"300px",height:"300px"}} src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1" alt="" /></td>
                    <td>$19901</td>
                    <td> <i className='fa-solid fa-trash text-danger'></i></td>
                   </tr>
                 </tbody>
              </table>
              <div className="d-flex justify-content-between">
                 <button className='btn btn-danger'>Empty Cart</button>
                 <Link to={'/'} style={{textDecoration:"none"}} className='btn btn-success'>Shop More</Link>
              </div>
         </div>
         <div className="col-lg-1">

         </div>
         <div className="col-lg-3 ">
         <div className="container border rounded shadow mt-5 p-5 w-85">
            <h2>Cart Summary</h2>
            <h4>Total Products</h4>
            <h5>Total: <span className='text-danger fw-bolder'>$1892</span></h5>
         </div>
         <div className="d-grid">
           <button className='btn btn-success mt-2 rounded'>Checkout</button>
         </div>
         </div>
      </div>
      
    </div>
  )
}

export default Cart
