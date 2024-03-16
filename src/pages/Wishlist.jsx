import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Wishlist() {
  const cart=useSelector(state=>state.cartReducer)

  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch=useDispatch()

  const handleCart = (product) => {
    const existingProduct = cart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      toast.success('Products added to the cart')

    } else {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      // alert('Product added to the cart')

    }
  }

 
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '100px' }}>

        {
          wishlist?.length > 0 ?
            <Row>
              {wishlist?.map(product => (
                <Col Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
                  <Card className='shadow rounded' style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '180px' }} variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title className='py-2'>{product.title}</Card.Title>
                      <div className="d-flex justify-content-between">
                        <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn btn-outline-warning '><i className='fa-solid fa-heart-circle-xmark'></i></button>
                        <button onClick={()=>handleCart(product)} className='btn btn-outline-success'><i className='fa-solid fa-cart-plus'></i></button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))

              }
            </Row> :

            <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center flex-column mb-5'>
              <img className='img-fluid' style={{ width: '400px', height: '500px' }} src="https://t4.ftcdn.net/jpg/02/40/53/03/360_F_240530324_va99UIdFaOD3mEEu34r1bjDIQADOF8L0.jpg" alt="" />
              <h3 className='mt-5 py-2 '> Your Wishlist is empty!!!</h3>
            </div>
        }

      </div >
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Wishlist