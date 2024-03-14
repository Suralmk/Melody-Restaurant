import React, { useState, useRef } from 'react'
import './main.css'
import { api } from '../config'
import images from '../constants/images'
const BookTable = () => {
  const buttonRef = useRef(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const HandleReservation = async e => {
    e.preventDefault()
    setLoading(true)
    buttonRef.current.disabled = true
    buttonRef.current.style.cursor = 'not-allowed'
    setTimeout(() => {
      setLoading(false)
      buttonRef.current.disabled = false
      buttonRef.current.style.cursor = 'pointer'
    }, 3000)
    try {
      const response = await api.post('/reserve', {
        full_name: fullName,
        email: email,
        phone: phone,
        date: date
      })
      setStatus(response.data.message)
      setLoading(false)
      console.log(response)
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
              pe='text'
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
          <button
            className='custom__button reserve-btn'
            ref={buttonRef}
            type='submit'
          >
            Book Table
            {loading ? (
              <img className='spinner-img' src={images.spinner} alt='' />
            ) : (
              ''
            )}
          </button>
        </form>

        {status ? <p className='status-message'>{status}</p> : ''}
      </div>
    </div>
  )
}

export default BookTable
