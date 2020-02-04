const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/shark-swim-api'
const secret = process.env.SECRET || 'swim with more sharks'

module.exports = { port, dbURI, secret }