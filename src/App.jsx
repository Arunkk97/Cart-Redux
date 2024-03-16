import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'

import Footer from './components/Footer'

function App() {

  return (
    <>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/*' element={<Navigate to={'/'} /> } />
      </Routes>

      <Footer />



    </>
  )
}

export default App
