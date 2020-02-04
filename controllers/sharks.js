const Shark = require('../models/shark')

function index(req, res) {
  Shark
    .find()
    .populate('user')
    .then(foundSharks => res.status(200).json(foundSharks))
    .catch(err => res.json(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Shark
    .create(req.body)
    .then(createdShark => res.status(201).json(createdShark))
    .catch(err => res.json(err))
}

function show(req, res) {
  Shark
    .findById(req.params.id)
    .populate('user')
    .then(shark => {
      if (!shark) return res.status(404).json({ message: 'Not Found' })
      res.status(200).json(shark)
    })
    .catch(err => res.json(err))
}

function update(req, res, next) {
  Shark
    .findById(req.params.id)
    .then(shark => {
      if (!shark) return res.status(404).json({ message: 'Not Found' })
      Object.assign(shark, req.body)
      shark.save()
    })
    .then(updatedShark => res.status(200).json(updatedShark))
    .catch(next)
}

function deleteShark(req, res) {
  Shark
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.json(err))
}

function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Shark
    .findById(req.params.id)
    .then(shark => {
      if (!shark) return res.status(404).json({ message: 'Not Found' })
      shark.comments.push(req.body)
      return shark.save()
    })
    .then(shark => res.status(201).json(shark))
    .catch(next)
}

function commentDelete(req, res) {
  Shark
    .findById(req.params.id)
    .then(shark => {
      if (!shark) return res.status(404).json({ message: 'Not Found' })
      const comment = shark.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(404).json({ message: 'Unauthorized' })
      } else {
        comment.remove()
        return shark.save().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err))
}


module.exports = { index, create, show, update, deleteShark, commentCreate, commentDelete }