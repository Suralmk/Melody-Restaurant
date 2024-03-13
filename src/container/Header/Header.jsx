import React from 'react'
import './header.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { motion } from 'framer-motion'
const Header = () => {
  const fromLeft = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 }
  }

   const fromTop = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }
   const fromRight = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 }
  }
   const fromDown = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }


  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__header_info'>
        <SubHeading title='Chase the new flavour' />
        <motion.h1
          variants={fromLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 0.2 }}
        >
          The key to fine dining
        </motion.h1>
        <motion.p
          className='p__style2'
          style={{ margin: '2rem 0', lineHeight: '30px' }}
          variants={fromLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 0.4 }}
        >
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          voluptates itaque aliquam numquam repudiandae estiae? Doloribus non
          eveniet laborum consequuntur voluptates!{' '}
        </motion.p>
        <motion.button
          className='custom__button'
          variants={fromLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore Menu
        </motion.button>
      </div>

      <div className='app__header_image'>
        <motion.img
          src={images.mainfood}
          alt=''
          variants={fromTop}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export default Header
