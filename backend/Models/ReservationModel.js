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
    required: true,
    validate: {
      validator: function (v, cb) {
        Reservation.find({ phone: v }, function (err, docs) {
          cb(docs.length == 0)
        })
      },
      message: 'User already exists!'
    }
  },
  date: {
    type: Date,
    required: true
  }
})

export const Reservation = mongoose.model('Melody', ReservationSchema)
