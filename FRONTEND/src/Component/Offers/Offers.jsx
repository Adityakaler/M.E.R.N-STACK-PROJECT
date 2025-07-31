import React from 'react'
import './Offers.css'

import exclusive_offer1 from '../../assets/exclusive_offer1.webp'

const Offers = () => {
  return (
    <div className='offers'>
     <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"></link>
        <h1>Exciting Offer's: You can't miss</h1>
        <hr />
        <img src={exclusive_offer1} alt="" />
    </div>
  )
}

export default Offers
