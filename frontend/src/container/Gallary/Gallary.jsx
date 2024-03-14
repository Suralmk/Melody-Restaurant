import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort
} from 'react-icons/bs'
import { images } from '../../constants'
import React from 'react'
import { SubHeading } from '../../components'
import './gallary.css'
import { motion } from 'framer-motion'
const Images = [
  images.cafe3,
  images.cafe4,
  images.cafe5,
  images.cafe6,
  images.cafe7,
  images.cafe8,
  images.cafe9,
  images.cafe1
]
const Gallary = () => {
  const scrollRef = React.useRef(null)

  const handleScroll = direction => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <div className='app__gallary flex__center section__padding'>
      <div className='app__gallary-content'>
        <SubHeading title='Instagram' />
        <motion.h1
          className='p__style'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Photo Gallary
        </motion.h1>
        <motion.p
          className='p__style2'
          style={{ color: '#aaa', marginTop: '1rem' }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {' '}
          ipsum dolor sit amet consectetur, adipisicing elit. Adipisci culpa
          veritatis dolores? Officia illum neque impedit sapiente it?{' '}
        </motion.p>
        <motion.button
          className='custom__button'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          View More
        </motion.button>
      </div>

      <div className='app__gallary-images'>
        <div className='app__gallary-images_container' ref={scrollRef}>
          {Images.map((image, index) => (
            <div
              className='app__gallary-images_cart flex__center'
              key={`gallary_image${index + 1}`}
            >
              <img src={image} alt='' />
              <BsInstagram className='instagram' />
            </div>
          ))}
        </div>

        <div className='app__gallary-images_btn'>
          <BsArrowLeftShort
            className='app__gallary-icon'
            onClick={() => handleScroll('left')}
          />
          <BsArrowRightShort
            className='app__gallary-icon'
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallary
