import React from 'react'
import './aboutus.css'
import {images} from '../../constants'
const AboutUs = () => {
  return (
    <div className='app_about app__bg flex__center section__padding' id='about'>
      <div className="app__about-overlay flex__center">
         <p>M</p>
      </div>
      <div className="app__about-content flec__center">

        <div className="app__about-content_about first">
          <h1 className='p__style'>About Us</h1>
          <div/>
          <p className='p__style2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at non sequi iste doloremque, eos rerum possimus. Pariatur officia nam fugit? Laboriosam, repellendus. Doloremque, assume</p>
          <button className='custom__button'>About Us</button>
        </div>

        <div className='knife'/>

        <div className="app__about-content_about">
          <h1 className='p__style'>Our History</h1>
          <div/>
          <p className='p__style2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at non sequi iste doloremque, eos rerum possimus. Pariatur officia nam fugit? Laboriosam, repellendus. Doloremque, assume</p>
          <button className='custom__button'>Our History</button>
        </div>
        
      </div>
    </div>
  )
}

export default AboutUs
