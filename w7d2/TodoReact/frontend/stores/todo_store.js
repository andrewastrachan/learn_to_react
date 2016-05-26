var _todos = [];
var _callbacks = [];
var _apiBase = 'http://localhost:3000/api/todos'

var TodoStore = {
  all: function() {
    return _todos;
  },

  fetch: function() {
    $.ajax({
      url: _apiBase + '.json',
      success: function(todos) {
        _todos = todos
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
      url: _apiBase + '.json',
      data: {todo: todo},
      success: function(todo) {
        _todos.push(todo);
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  destroy: function(todo) {
    $.ajax({
      type: 'DELETE',
      url: _apiBase + '/' + todo.id + '.json',
      data: {todo: todo},
      success: function(todo) {
        var idx = _todos.findIndex(function(item) {return item.id===todo.id})
        if (idx !== -1) {
          _todos.splice(idx, 1)
        }
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  toggleDone: function(todo) {
    $.ajax({
      type: 'PATCH',
      url: _apiBase + '/' + todo.id + '.json',
      data: {todo: {done: !todo.done}},
      success: function(todo) {
        var idx = _todos.findIndex(function(item) {return item.id===todo.id})
        if (idx!==1) {
          _todos[idx] = todo
        }
      },
      error: function(error) {
        alert('error during update')
        console.log(error)
      }
    })
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
    var idx = _callbacks.indexOf(callback)
    if (idx !== -1) {
      _callbacks.splice(_callbacks.indexOf(callback), 1)
    }
  },
};

module.exports = TodoStore;
