import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div style={{ height: '300px' }} className=' w-100 py-2  mt-5 px-3 bg-info'>
      <div className='footer-content d-flex justify-content-between'>
        <div style={{ width: '400px' }} className='media'>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <h5 className='d-flex fw-bolder py-2'>  {' '}E KART</h5>
          </Link>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus labore debitis pariatur explicabo distinctio vitae obcaecati, eaque architecto deleniti recusandae modi porro, laboriosam unde iusto esse maiores amet assumenda!</p>
        </div>
        <div className='contact'>
          <h5 className='fw-bolder py-2'>Contact Us</h5>
          <div className='d-flex'>
            <input type="text" className='form-control me-1' placeholder='Email id ' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right py-2"></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
            <a target='blank' style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/"><i class="fa-brands fa-facebook "></i></a>
            <a target='blank' style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a target='blank' style={{ textDecoration: 'none', color: 'white' }} href="https://twitter.com/?lang=en"><i class="fa-brands fa-x-twitter"></i></a>
            <a target='blank' style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5 fw-bolder'>Copyright &copy; 2024 E KART. Built with React</p>

    </div>
  )
}

export default Footer