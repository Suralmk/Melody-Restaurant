import React from 'react'
import './main.css'
const BookTable = () => {
  return (
    <div className='app__book section__padding'>
      <h1 className="p__style">Book A Table at Melody Restaurant</h1>
      <div className="app__book-form">
        <form action="">
          <div className="input-field">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='' />
          </div>
          <div className="input-field">
            <label >Full Name</label>
            <input type="text" placeholder='' />
          </div>
          <div className="input-field">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='' />
          </div>
          <div className="input-field">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='' />
          </div>
          <buttton className="custom__button">
            Book Table
          </buttton>
        </form>
      </div>
    </div>
  )
}

export default BookTable
