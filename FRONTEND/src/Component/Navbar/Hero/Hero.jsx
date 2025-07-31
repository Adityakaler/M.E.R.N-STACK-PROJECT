import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2> BEST DEALS ! BEST PRICES !</h2>
        <br />

        <h1>Discover Your Choice</h1>
        <h3>  We Believe Good Service  <br />&nbsp; &nbsp; Offers Great Quality </h3>
        <div className="hero-latest-btn">
          <button>Latest Collection</button>
        </div>
      </div>


      <div className="hero-right">
        <img src="https://cdn.pixabay.com/photo/2024/03/19/20/44/ai-generated-8644121_640.png" alt="" />
      </div>
    </div>
  )
}

export default Hero