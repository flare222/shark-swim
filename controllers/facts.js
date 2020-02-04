const Fact = require('../models/fact')

function index(req, res) {
  Fact
    .find()
    .then(foundFacts => res.status(200).json(foundFacts))
    .catch(err => res.json(err))
}

module.exports = { index }

