console.log('Cargo la pagina')

const todosTemplate = document.getElementById('todo-template')
const todosList = document.getElementById('todo-list')
const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const descripcion = input.value
  input.value = ''
  agregarTodo(descripcion)
})

function listarTodos () {
  //...
}

function agregarTodo (descripcion) {
  axios.post(
    'http://localhost:3000/api/todos',
    { descripcion }
  )
    .then(respuesta => {
      console.log('ok', respuesta)
    })
    .catch(error => console.log('error', error))
}

function marcarComoHecho (todo) {
  //...
}

function actualizarLista(todos) {
  todosList.innerHTML = ejs.render(todosTemplate.text, { todos })
}
