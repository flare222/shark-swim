const router = require('express').Router()
const sharks = require('../controllers/sharks')
const users = require('../controllers/auth')
const facts = require('../controllers/facts')
const secureRoute = require('../lib/secureRoute')

router.route('/sharks')
  .get(sharks.index)
  .post(secureRoute, sharks.create)

router.route('/sharks/:id')
  .get(sharks.show)
  .delete(secureRoute, sharks.deleteShark)
  .put(secureRoute, sharks.update)

router.route('/sharks/:id/comments')
  .post(secureRoute, sharks.commentCreate)  

router.route('/sharks/:id/comments/:commentId')
  .delete(secureRoute, sharks.commentDelete)

router.route('/facts')
  .get(facts.index)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router