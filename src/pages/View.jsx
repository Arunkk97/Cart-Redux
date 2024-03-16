import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../Redux/slices/wishlistSlice'
import {addToCart} from '../Redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function View() {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  // console.log(id);

  const dispatch = useDispatch()

  const wishlist = useSelector(state => state.wishlistReducer)

  const handleWishlist = (product) => {
    if (wishlist?.includes(product)) {
      toast.info("item already added in your wishlist")
    } else {
      dispatch(addWishlistItem(product))
    }
  }

  const cart = useSelector(state => state.cartReducer)

  const handleCart = (product) => {
    const existingProduct = cart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      toast.success('Products added to the cart')

    } else {
      dispatch(addToCart(product))
      // toast.success('Product added to the cart')

    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allProducts);
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])
  console.log(product);

  return (
    <>
      <Header />
      <div style={{ marginTop: '100px', height: '100vh' }} className=' container '>
        <div className="row mt-5">
          <div className="col-lg-6 mt-4">
            <img src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-6">
            <h5 className='py-2 mt-4' >PID:{product?.id}</h5>
            <h1 className='py-2'>{product?.title}</h1>
            <h3 className='text-primary py-2'>${product.price}</h3>
            <p style={{ textAlign: "justify" }}> <b>Description:</b>{product?.description}</p>
            <div className="d-flex justify-content-between">
              <button onClick={() => handleWishlist(product)} className='btn btn-outline-warning '><i className='fa-solid fa-heart'></i>Add to Wishlist</button>
              <button onClick={() => handleCart(product)} className='btn btn-outline-success'><i className='fa-solid fa-cart-plus'></i>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default View