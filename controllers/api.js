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

router.put('/todos/:id', (req, res) => {
  // actualizar el elemento con id = req.params.id
  // luego devolverlo con res.send
})

module.exports = router
