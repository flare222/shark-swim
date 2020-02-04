function logger(req, res, next) {
  console.log(`incoming ${req.method} to ${req.url}`)
  next()
}

module.exports = logger