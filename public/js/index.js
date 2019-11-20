const todosTemplate = document.getElementById('todo-template')
const todosList = document.getElementById('todo-list')

function listarTodos () {
  //...
}

function agregarTodo (descripcion) {
  //...
}

function marcarComoHecho (todo) {
  //...
}

function actualizarLista(todos) {
  todosList.innerHTML = ejs.render(todosTemplate.text, { todos })
}
