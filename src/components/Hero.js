import React from 'react'
import restauranfood from "../images/restauranfood.jpg";
const Hero = () => {
  return (
    <div className='row hero mt-5'>
        <div className='col-md-7 mt-5 '>
        <h2 className='primary-lemon hero-heading px-5'>Little Lemon</h2>
     <p className='hero-p  text-center'>We are a family owned Mediterranean
        restaurant, focused on traditional recipes served with a modern twist.
     </p>
        </div>
        <div className='col-md-5 mt-5 px-5 d-sm-none d-md-block'>
            <img src={restauranfood} alt='restaurant food' className='hero-img'/>
        </div>
    
    </div>
  )
}

export default Hero
