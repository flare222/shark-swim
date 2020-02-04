const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema
  .set('toJSON', {
    transform(doc, json) {
      delete json.password
      return json
    }
  })

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('confirmPassword')
  .set(function setConfirmPassword(confirmPassword) {
    this._confirmPassword = confirmPassword
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._confirmPassword !== this.password) {
      this.invalidate('confirmPassword', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

module.exports = mongoose.model('User', userSchema)