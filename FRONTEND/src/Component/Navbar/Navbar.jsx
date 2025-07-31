import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus, faUser } from '@fortawesome/free-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_img.jpeg'
import cart from '../../assets/cart.png'

const Navbar = () => {
     const [ navLinks, setNavLinks] = useState("home")
      const [search, setSearch] = useState("")

      const handleSearchChange = (e) => {
      setSearch(e.target.value)
      }

      const handleSearchSubmit = (e) => {
    e.preventDefault()
    // You can add your search logic here
    
  }
  
  return (
    <div className='navbar'>
          <div className="nav-logo">
           <img src={logo} alt="Logo" height="50px" />
           <p> Shoe Store</p>
          </div>

          <ul className='nav-links'>
            <li onClick={() => {setNavLinks("home")}}><Link style={{textDecoration:"none",color:"orangered"}} to="/">Home</Link>{navLinks==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setNavLinks("products")}}><Link style={{textDecoration:"none"}} to="/products">Products</Link>{navLinks==="products"?<hr/>:<></>}</li>
            <li onClick={() => {setNavLinks("mens")}}><Link style={{textDecoration:"none"}} to="/mens">Men</Link>{navLinks==="mens"?<hr/>:<></>}</li>
            <li onClick={() => {setNavLinks("womens")}}><Link style={{textDecoration:"none"}} to="/womens">Women</Link>{navLinks==="womens"?<hr/>:<></>}</li>
            <li onClick={() => {setNavLinks("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{navLinks==="kids"?<hr/>:<></>}</li>
          </ul>

          <form className="nav-searchbar" onSubmit={handleSearchSubmit}>
            <input type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
          
          
          <div className="nav-login-cart">
              <Link to="/login"><button>Login</button></Link>
              <img src={cart} alt="Cart icon"  height="40px"/>
              <Link to="/cart"><div className="nav-cart-count">0</div></Link>
          </div>
     </div>
  )
}



export default Navbar