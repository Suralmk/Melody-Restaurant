import React from 'react'
import './menuitem.css'
const MenuItem = ({title, price, tags}) => {
  return (
    <div className='app__menuitem'>
        <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className='p__style3'> {title}</p>
            </div>
            <div className='app__menuitem-dash'/>

            <div className="app_-menuitem-price">
                <p className='p__style2'> {price}</p>
            </div>
        </div>
        <div className="app__menuitem-tag">
            <p className='p__style2'>{tags}</p>
        </div>
      
    </div>
  )
}

export default MenuItem
