import React from 'react'
import './header.css'
import {SubHeading} from '../../components'
import {images} from '../../constants'
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      
      <div className="app__header_info">
        < SubHeading title="Chase the new flavour" />
        <h1>The key to fine dining</h1>
        <p className='p__style2' style={{ margin: "2rem 0", lineHeight:"30px"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates itaque aliquam numquam repudiandae estiae? Doloribus non eveniet laborum consequuntur voluptates! </p>
        <button className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__header_image">
          <img src={images.cafe4} alt="" />
      </div>

    </div>
  )
}

export default Header
