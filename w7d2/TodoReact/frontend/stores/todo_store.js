var _todos = [];
var _callbacks = [];
var _apiBase = 'http://localhost:3000/api/todos.json'

var TodoStore = {
  all: function() {
    return _todos;
  },

  fetch: function() {
    $.ajax({
      url: _apiBase,
      success: function(todos) {
        _todos = todos
        return _todos;
      },
      error: function(error) {
        alert('error during fetch')
        console.log(error)
      }
    });
  },

  create: function(todo) {
    $.ajax({
      type: 'POST',
      url: _apiBase,
      data: {todo: todo},
      success: function(todo) {
        _todos.push(todo);
        return todo;
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  destroy: function() {
    debugger
    //AJAX to destroy TODO, remove from array after success
  },

  toggleDone: function() {
    debugger
    //AJAX to finish TODO, an update to finish a TODO
  },

  changed: function() {
    _callbacks.forEach(function(callback) {
      callback();
    });
  },

  addChangedEventHandeler: function(callback) {
    _callbacks.push(callback)
  },

  removeChangedEventHandeler: function(callback) {
    _callbacks.splice(_callbacks.indexOf(callback), 1)
  },
};

module.exports = TodoStore;
