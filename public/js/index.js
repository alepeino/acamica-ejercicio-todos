const todosTemplate = document.getElementById('todo-template')
const todosList = document.getElementById('todo-list')

function listarTodos () {

}

function actualizarLista(todos) {
  todosList.innerHTML = ejs.render(todosTemplate.text, { todos })
}

function agregarTodo (descripcion) {
  //...
}

function marcarComoHecho (todo) {
  //...
}
