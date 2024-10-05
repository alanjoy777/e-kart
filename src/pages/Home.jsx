import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../redux/slice/productSlice'


function Home() {

  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=> state.productReducer)
  console.log(products.products);
console.log(loading);
console.log(error);

  
  useEffect(()=>{

      dispatch(fetchProductData())

  },[])

  



  return (
    <div style={{marginTop:"70px"}}>
        <Row className='mt-5 container'>
  
        <Col className='mb-3 mt-3' sm={12} md={8} lg={4} xl={3} >
        <Card style={{ width: '18rem' }} className='shadow'>
 <Link to={`/view/1`}><Card.Img variant="top" style={{width:"100%"}} src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1" />
 </Link>
       <Card.Body className='bg-success'>
         <Card.Title style={{color:"black"}} className='text-center'>iphone</Card.Title>
         <div className="d-flex justify-content-between">
             <Button className='btn btn-light' ><i className='fa-solid fa-heart text-danger'></i></Button>
             <Button className='btn btn-light' ><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
         </div>
         
       </Card.Body>
     </Card>
        </Col>
    
    
    </Row>
    </div>
  )
}

export default Home
