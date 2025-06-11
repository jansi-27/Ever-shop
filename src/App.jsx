import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import Shoes from './stores/components/Shoes'
import MensWear from './stores/components/MensWear'
import WomensWear from './stores/components/WomensWear'
import KidsWear from './stores/components/KidsWear'
import SunGlasses from './stores/components/SunGlasses'
import Bags from './stores/components/Bags'
import Watches from './stores/components/Watches'
import Jewellery from './stores/components/Jewellery'
import Cart from './stores/components/Cart'
import { CartProvider } from './context/CartContext'
import AuthForm from './stores/pages/AuthForm'
import LoginPage from './stores/pages/LoginPage'


const App = () => {
  return (
    <CartProvider>

      <Routes >
        <Route path='/' element={<LandingPage />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/men' element={<MensWear />} />
        <Route path='/women' element={<WomensWear />} />
        <Route path='/kids' element={<KidsWear />} />
        <Route path='/sunglasses' element={<SunGlasses />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/watch' element={<Watches />} />
        <Route path='/jewellery' element={<Jewellery />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='auth' element={<AuthForm />} />
        <Route path="/login" element={<LoginPage />} />


      </Routes>
    </CartProvider>
  )
}

export default App