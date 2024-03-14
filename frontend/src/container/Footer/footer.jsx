import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const footer = () => {
  return (
    <div className='app__footer app__wrapper section__padding'>
      <div className="app__footer-contact">
        <h2 className="p__style2 footer__title">Contact Us</h2>
        <ul>
          <li className='p__style2'>Dessie, Shell street 02</li>
          <li className='p__style2'>melody.info@gmail.com</li>
          <li className='p__style2'> +251-933 111 55</li>
        </ul>
      </div>
      <div className="app__footer-social">
        <h2 className="p__style2 footer__title">Melody</h2>
        <p className='p__style2' style={{
          textAlign:"center",
          width: 400
        }}>The best way to find yourself is to lose your self in service of others</p>
        <ul>
                <li>
                  <FaInstagram  color='white'/>
                </li>
                <li>
                  {' '}
                  <FaFacebook  color='white'/>
                </li>
                <li>
                  <FaTwitter  color='white'/>
                </li>
                <li>
                  {' '}
                  <FaPinterest color='white'/>
                </li>
              </ul>
      </div>

      <div className="app__footer-working">
        <p className='p__style2 footer__title'>Working Hours</p>
        <div className="footer-work">
          <p className='p__style2'>Monday - Friday</p>
          <p className='p__style2'>8am - 12am</p>
        </div>
        <div className="footer-work">
          <p className='p__style2'>Saturday - Sunday</p>
          <p className='p__style2'>6am - 12am</p>
        </div>
        
      </div>
    </div>
  )
}

export default footer
