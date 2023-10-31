import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Usetry from './components/Usetry'
import Product from './components/Product'
import Navbar from './components/Navbar.jsx'
import Restaurant1 from './components/Restaurant1'
import Restaurant2 from './components/Restaurant2'
import Restaurant3 from './components/Restaurant3'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {

  return (

    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/restaurant" element={<> <Restaurant1/> <Restaurant2 />
      <Restaurant3/>
      </>} />

    </Routes>
    </BrowserRouter>
  
    </>

   
  )
}

export default App
