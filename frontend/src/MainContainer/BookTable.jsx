import React, { useState } from 'react'
import './main.css'
import { api } from '../config'
const BookTable = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState()
  const HandleReservation = async e => {
    e.preventDefault()
    try {
      const response = await  api.post('/reserve', {
        full_name: fullName,
        email: email,
        phone: phone,
        date: date
      })
      setStatus(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div className='app__book section__padding'>
      <h1 className='p__style'>Book A Table at Melody Restaurant</h1>
      <div className='app__book-form'>
        <form onSubmit={e => HandleReservation(e)}>
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
              type='email'
              placeholder=''
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className='input-field'>
            <input
              type='number'
              placeholder=''
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor=''>Phone Number</label>
          </div>
          <div className='input-field'>
            <input
              type='date'
              required
              value={date}
              placeholder='YYYY-MM-DD'
              onChange={e => setDate(e.target.value)}
            />
            <label htmlFor=''>Rerervation Date</label>
          </div>
          <button className='custom__button' type="submit">Book Table</button>
        </form>
      </div>
    </div>
  )
}

export default BookTable
