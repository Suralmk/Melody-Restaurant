import mongoose from 'mongoose'

const ReservationSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

export const Reservation = mongoose.model('Melody', ReservationSchema)
