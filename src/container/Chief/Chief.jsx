import React from 'react'
import './chef.css'
import {images} from '../../constants'
import {SubHeading} from '../../components'
const Chief = () => {
  return (
    <div className="app__chef_cover app__bg">
      <div className='app__chef section__padding flex__center '>

        <div className="app__chef-image">
          <img src={images.sura} alt="" />
        </div>

        <div className="app__chef-message ">
        <SubHeading title="Chef Message"/>
        <h1 className='p__style'>What we Believe in</h1>
        <p className='p__style2 message'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consequatur nemo iure voluptates molestiae eligendi consequuntur ea dolores doloribus impedit vitae placeat, earum velit incidunt veniam sapiente nulla hic animi!
        </p>
        <div className="sign">
          <p className='p__style3'>Surafe Melaku</p>
          <p className='p__style2'>Surafe Melaku</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Chief
