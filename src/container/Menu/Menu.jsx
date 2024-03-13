import React from 'react'
import './menu.css'
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import { motion } from 'framer-motion'
const Menu = () => {
  const fromLeft = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 }
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
    <div className='section__padding app__menu flex__center' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title='Menu that fires your pallate' />
        <h1 className='p__style'>Today's Special</h1>
      </div>

      <div className='app__menu-m'>
        <div className='app__menu-m_wine flex__center'>
          <div className='app__menu-m_heading'>
            <p className='p__style'>Wine and Beer</p>
          </div>
          <motion.div
            className='app__menu_m_items'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {data.wines.map((wine, index) => (
              <MenuItem
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
                keys={wine.title + index}
              />
            ))}
          </motion.div>
        </div>

        <div className='app__menu-m_image'>
          <motion.img
            src={images.coktail}
            alt='coktail wine'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </div>

        <div className='app__menu-m_cocktail flex__center'>
          <div className='app__menu-m_heading'>
            <p className='p__style'>cocktail</p>
          </div>
          <motion.div
            className='app__menu_m_items'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {data.coktails.map((cocktail, index) => (
              <MenuItem
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
                keys={cocktail.title + index}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className='app__menu-btn' style={{ marginTop: '20px' }}>
        <button className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default Menu
