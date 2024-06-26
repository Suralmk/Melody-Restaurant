import React, { useState , useRef} from 'react'
import './navbar.css'
import {images} from '../../constants'
import {vedio} from '../../constants'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menuToggle, setToggle] = useState(false)
const navRef = useRef()
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.app__navbar')
  navbar.classList.toggle('sticky', this.window.scrollY > 1)
})
  return (
    <div className='app__navbar' ref={navRef}>
      <div className="app__navbar-logo">
        <p className="p__style">Melody</p>
      </div>

        <ul className="app__navbar-links">
          <li className="p__style2"><Link to="/">Home</Link></li>
          <li className="p__style2"><a href="#about">About</a></li>
          <li className="p__style2"><a href="#menu">Menu</a></li>
          <li className="p__style2"><a href="#contact">Contact</a></li>
        </ul>

      <div className="app__navbar-login">
        <div/>
        <Link to="/book-table" className='p__style2'>Book Table</Link>
      </div>

      <div className="app__navbar-menu">
        < GiHamburgerMenu color='white' fontSize={27} cursor='pointer' onClick={() => setToggle(true)}/>
        {menuToggle && (
          <div className="app__navbar-menu_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu color='white' fontSize={27} cursor='pointer' onClick={() => setToggle(false)} className='menu_close' />
          <ul className="app__navbar-menu_links">
            <li className="p__style2"><Link to="/">Home</Link></li>
            <li className="p__style2"><a href="#about">About</a></li>
            <li className="p__style2"><a href="#menu">Menu</a></li>
            <li className="p__style2"><a href="#contact">Contact</a></li>
          </ul>
          <div className="app__navbar-menu_login">
            <div/>
            <Link to="/book-table" className='p__style2'>Book Table</Link>
        </div>
        </div>
        )}
            
      </div>

    </div>

  )
}

export default Navbar
