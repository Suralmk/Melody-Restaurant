import React, { useState } from 'react'
import './navbar.css'
import {images} from '../../constants'
import {vedio} from '../../constants'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

const Navbar = () => {
  const [menuToggle, setToggle] = useState(false)
  return (
    <div className='app__navbar'>

      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
      </div>

        <ul className="app__navbar-links">
          <li className="p__style2"><a href="#home">Home</a></li>
          <li className="p__style2"><a href="#about">About</a></li>
          <li className="p__style2"><a href="#menu">Menu</a></li>
          <li className="p__style2"><a href="#awards">Awards</a></li>
          <li className="p__style2"><a href="#contact">Contact</a></li>
        </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p__style2'>Log in / Register</a>
        <div/>
        <a href="/home" className='p__style2'>Book Table</a>
      </div>

      <div className="app__navbar-menu">
        < GiHamburgerMenu color='white' fontSize={27} cursor='pointer' onClick={() => setToggle(true)}/>
        {menuToggle && (
          <div className="app__navbar-menu_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu color='white' fontSize={27} cursor='pointer' onClick={() => setToggle(false)} className='menu_close' />
          <ul className="app__navbar-menu_links">
            <li className="p__style2"><a href="#home">Home</a></li>
            <li className="p__style2"><a href="#about">About</a></li>
            <li className="p__style2"><a href="#menu">Menu</a></li>
            <li className="p__style2"><a href="#awards">Awards</a></li>
            <li className="p__style2"><a href="#contact">Contact</a></li>
          </ul>
          <div className="app__navbar-menu_login">
            <a href="#login" className='p__style2'>Log in / Register</a>
            <div/>
            <a href="/home" className='p__style2'>Book Table</a>
        </div>
        </div>
        )}
            
      </div>

    </div>

  )
}

export default Navbar
