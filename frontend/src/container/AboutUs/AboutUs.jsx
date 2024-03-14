import React from 'react'
import './aboutus.css'
import { motion } from 'framer-motion'
const AboutUs = () => {
  return (
    <div className='app_about  flex__center section__padding' id='about'>
      <motion.div
        className='app__about-overlay flex__center'
        initial={{ z: -100, opacity: 0 }}
        whileInView={{ z: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <p>M</p>
      </motion.div>
      <div className='app__about-content flex__wrapper'>
        <div className='app__about-content_about first'>
          <motion.h1
            className='p__style'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <div />
          <motion.p
            className='p__style2'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Welcome to Melody Restaurant , where flavors dance on your palate.
            Our culinary artisans craft exquisite dishes, blending tradition
            with innovation. Step into our world of taste and ambiance, where
            every visit is a savory delight.
          </motion.p>
          <motion.button
            className='custom__button'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            About Us
          </motion.button>
        </div>

        <div className='app__about-content_about'>
          <motion.h1
            className='p__style'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Our History
          </motion.h1>
          <div />
          <motion.p
            className='p__style2'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Established in 2010, Melody Restaurant began as a humble eatery,
            serving homemade dishes with love. Over the years, our dedication to
            quality and innovation has transformed us into a beloved culinary
            destination, cherished by locals and visitors alike.
          </motion.p>
          <motion.button
            className='custom__button'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Our History
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
