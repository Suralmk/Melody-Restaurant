import React from 'react'
import './subscribe.css'
import { SubHeading } from '../../components'
const Subscribe = () => {
  return (
    <div className='section__padding app__subscribe flex__center' id='menu'>
      <SubHeading title='Subscribe' />
      <h1 className='p__style'>Subscribe to Our News Letter</h1>
      <p className='p__style2'>Get Latest News!</p>
      <form action='' className='subscribe__form'>
        <input type='email' name='email' placeholder='Enter your Email!' />
        <button className='custom__button'>Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
