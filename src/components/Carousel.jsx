import React from 'react'
import '../css/Carousel.css'
import slide7 from '../assets/images/salon2.jpg'

function Carousel() {

  return (
    <div className='slider-container'>
     <div  className="slide-wrapper">
        <img className="slide" src={slide7} alt='img' />
        <span className="quote">
          {"Great hair doesn't happen by chance, it happens by appointment."}
        </span>
      </div>
    </div>
  )
}

export default Carousel