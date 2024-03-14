import React, { useState } from 'react'
import './main.css'
const BookTable = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  return (
    <div className='app__book section__padding'>
      <h1 className='p__style'>Book A Table at Melody Restaurant</h1>
      <div className='app__book-form'>
        <form action=''>
          <div className='input-field'>
           
            <input
              type='text'
              placeholder=''
              value={fullName}
              required
              onChange={e => setFullName(e.target.value)}
            />
             <label htmlFor=''>Full Name</label>
          </div>
          <div className='input-field'>
           
            <input
              type='text'
              placeholder=''
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
             <label>Email</label>
          </div>
          <div className='input-field'>
          
            <input
              type='text'
              placeholder=''
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
              <label htmlFor=''>Phone Number</label>
          </div>
          <div className='input-field'>
           
            <input
              type='text'
              placeholder=''
              required
              value={date}
              onChange={e => setDate(e.target.value)}
            />
             <label htmlFor=''>Rerervation Date</label>
          </div>
          <buttton className='custom__button'>Book Table</buttton>
        </form>
      </div>
    </div>
  )
}

export default BookTable
