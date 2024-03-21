import React from 'react'
import './chef.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import { motion } from 'framer-motion'
const Chief = () => {
  return (
    <div className='app__chef_cover'>
      <div className='app__chef section__padding flex__center '>
        <div className='app__chef-image'>
          <motion.img
            src={images.chef}
            alt=''
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </div>

        <div className='app__chef-message '>
          <SubHeading title='Chef Message' />
          <motion.h1
            className='p__style'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            What we Believe in
          </motion.h1>
          <motion.p
            className='p__style2 message'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Hello, esteemed guests! I am Chef Stephen Daniel , and it's an honor
            to welcome you to Melody Restaurant. Tonight, indulge in a culinary
            journey where passion meets precision, as my team and I craft each
            dish with meticulous care and dedication to delight your senses
          </motion.p>
          <div className='sign'>
            <motion.p
              className='p__style3'
              initial={{ x: 1100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              Stephen Daniel
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chief
