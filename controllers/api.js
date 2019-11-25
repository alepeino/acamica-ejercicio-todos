const express = require('express')
const Todo = require('../models/Todo')

const router = express.Router()

const lista = []

router.post('/todos', (req, res) => {
  const descripcion = req.body.descripcion
  const todo = new Todo(descripcion)
  lista.push(todo)
  res.send(todo)
})

module.exports = router
