import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Hero from './Component/Navbar/Hero/Hero.jsx'
import ItemCard from './Component/Item/Item.jsx'
import Card from './Component/Card/Card.jsx'
import Offers from './Component/Offers/Offers.jsx'
import NewCollection from './NewCollections/NewCollection.jsx'
import Newsletter from './Newsletter/Newsletter.jsx'
import Footer from './Footer/Footer.jsx'
import women_banner from "./assets/women_banner.jpg"
import kids_banner from "./assets/kids_banner.jpg"
import mens_banner from "./assets/mens_banner.jpg"


function App() {

  return (

    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Hero />
        <Card />
        <NameForm />
        <Offers />
        <NewCollection />
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
