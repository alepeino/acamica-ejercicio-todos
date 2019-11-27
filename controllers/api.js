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
  const id = req.params.id
  const completado = req.body.completado

  for (var i = 0; i < lista.length; i++) {
    if (String(lista[i].id) === id) {
      lista[i].completado = completado
      res.send(lista[i])
      return
    }
  }

  res.status(404).send('No hay ToDo con ese id')
})

module.exports = router
