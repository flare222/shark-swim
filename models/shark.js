const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const sharkSchema = new mongoose.Schema({
  commonName: { type: String, required: true },
  scientificName: { type: String, required: true, unique: true },
  manEater: { type: Boolean, required: true },
  lengthInFeet: {  type: Number, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Shark', sharkSchema)