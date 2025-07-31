import React from 'react'
import Card from '../Component/Card/Card'
import Hero from '../Component/Navbar/Hero/Hero.jsx'
import NewCollections from '../NewCollections/NewCollection.jsx'
import Offers from '../Component/Offers/Offers.jsx'
import Newsletter from '../Newsletter/Newsletter.jsx'
import Footer from '../Footer/Footer.jsx' 


const Shop = () => {
  return (
    <div>
     
     <Hero/>
      <Card />
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Shop