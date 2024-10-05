import React from 'react'
import { Button } from 'react-bootstrap'

function View() {
  return (
    <div className='container row' style={{marginTop:"80px"}}>

       <div className="col-lg-4">
            <img style={{width:"100%",height:"400px"}} src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1" alt="" />
       </div>
       <div className="col-lg-2">

       </div>
       <div className="col-lg-6">
          <p>Pid:019182</p>
          <h1>Product Title</h1>
          <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>$50000</span></h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sapiente! Consectetur nihil quas ea autem est, illo, temporibus error molestias nemo odit voluptate nobis cupiditate dolor molestiae? Ipsa, consectetur veritatis.</p>
           <div className="d-flex justify-content-between mt-4">
           <Button className='btn btn-light' ><i className='fa-solid fa-heart text-danger'></i></Button>
           <Button className='btn btn-light' ><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
           </div>
       </div>

    </div>
  )
}

export default View
