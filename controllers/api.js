const express = require('express')
const Todo = require('../models/Todo')

const router = express.Router()

const lista = []

router.get('/todos', (req, res) => {
  res.send(lista)
})

router.post('/todos', (req, res) => {
  const descripcion = req.body.descripcion
  const todo = new Todo(lista.length + 1, descripcion)
  lista.push(todo)
  res.send(todo)
})

module.exports = router
