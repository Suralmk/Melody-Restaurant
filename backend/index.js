import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { PORT, MONGOURL } from './config.js'
import { Reservation } from './Models/ReservationModel.js'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'https://melody-restaurant-frontend.vercel.app'
  })
)
app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/reserve', async (req, res) => {
  try {
    if (
      !req.body.full_name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.date
    ) {
      return res.status(400).send({ message: 'All fieds are required!' })
    }
    
    var currentDate = new Date()
    var reservationDate = new Date(req.body.date)
    if (reservationDate < currentDate) {
      return res.status(401).send({
        message : "Error : Date has already passed!"
      })
    }
    const newReservation = {
      full_name: req.body.full_name,
      email: req.body.email,
      phone: req.body.phone,
      date: req.body.date
    }
    const reservation = await Reservation.create(newReservation)
    return res.status(201).send({
      message: `Succesfully Reserved for date ${req.body.date}`
    })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
})
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log('yes', PORT)
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message)
  })
