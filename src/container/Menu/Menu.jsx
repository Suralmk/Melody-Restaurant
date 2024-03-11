import React from 'react'
import './menu.css'
import {images, data} from '../../constants'
import {SubHeading, MenuItem} from '../../components'

const Menu = () => {
  return (
    <div className='section__padding app__menu flex__center' id='menu'>
      <div className="app__menu-title">
        <SubHeading title="Menu that fires your pallate"/>
        <h1 className='p__style'>Today's Special</h1>
      </div>

      <div className="app__menu-m">

        <div className="app__menu-m_wine flex__center">
          <div className="app__menu-m_heading">
          <p className='p__style'>Wine and Beer</p>
          </div>
          <div className="app__menu_m_items">
            {data.wines.map((wine, index) => (
              <MenuItem title={wine.title} price={wine.price} tags={wine.tags} keys={wine.title + index}/>
            ))}
          </div>
        </div>

        <div className="app__menu-m_image">
          <img src={images.cafe1} alt="coktail wine" />
        </div>

        <div className="app__menu-m_cocktail flex__center">
          <div className="app__menu-m_heading">
            <p className='p__style'>cocktail</p>
          </div>
          <div className="app__menu_m_items">
            {data.coktails.map((cocktail, index) => (
              <MenuItem title={cocktail.title} price={cocktail.price} tags={cocktail.tags} keys={cocktail.title + index}/>
            ))}
          </div>
        </div>
        

      </div>
      <div className="app__menu-btn" style={{ marginTop: "20px"}}>
          <button className='custom__button'>View More</button>
        </div>

      
      
    </div>
  )
}

export default Menu
