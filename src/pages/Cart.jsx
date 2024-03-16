import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../Redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const navigate=useNavigate()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    if (cartItems?.length > 0) {
      setCartTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))
    }else {
      setCartTotal(0)
    }
  }, [cartItems])

  const dispatch=useDispatch()

  const handleDecrementQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckOut=()=>{
    dispatch(emptyCart())
    toast.success('Order placed successfully..Thankyou for purchasing with us!!!')
   setTimeout(()=>{
    navigate('/home')
   },3000)
  }

  return (
    <>
      <Header />
      <div className='container mb-5' style={{ marginTop: '100px' }}>

        {cartItems.length > 0 ?
          <div className='pt-5'>
            <h1 className='py-2'>Cart Summary</h1>
            <div className="row mt-5">
              <div className="col-lg-8">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((product, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{product.title.slice(0, 15)}...</td>
                        <td><img width={"60px"} height={"60px"} src={product.thumbnail} alt="" /></td>
                        <td>
                          <div className='d-flex'>
                            <button onClick={()=>handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                            <input value={product.quantity} style={{ width: '50px' }} type="text" className='form-control' placeholder='0' readOnly />
                            <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='btn fw-bolder'>+</button>
                          </div>
                        </td>
                        <td>{product.totalPrice}</td>
                        <td> <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn '><i className="fa-solid fa-trash text-primary py-2"></i></button></td>
                      </tr>
                    ))

                    }
                  </tbody>
                </table>

                <div className='float-end mt-3'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
                  <Link className='btn btn-danger ms-4' to={'/'}>Shop more</Link>
                </div>
              </div>

              <div className="col-lg-4">
                <Card className='shadow rounded p-3' >
                  <Card.Body>
                    <Card.Title>
                      <h5 className='py-2'>Total items: <b className='text-primary'>{cartItems?.length}</b></h5>
                      <h3 className='py-2'>Total Amount: <b className='text-primary'>{cartTotal}</b></h3>
                      <div className='d-grid mt-4'>
                        <button onClick={handleCheckOut} className='btn btn-success '>Check Out</button>
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>

              </div>
            </div>
          </div> :

          <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid' style={{ width: '400px', height: '500px' }} src="https://t4.ftcdn.net/jpg/02/40/53/03/360_F_240530324_va99UIdFaOD3mEEu34r1bjDIQADOF8L0.jpg" alt="" />
            <h2 className='mt-5 mb-5 py-3'> Your Cart is empty!!!</h2>
          </div>}
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Cart