var _todos = [];
var _callbacks = [];
var _apiBase = 'http://localhost:3000/api/todos'

var TodoStore = {
  all: function() {
    return _todos;
  },

  fetch: function() {
    var that = this
    $.ajax({
      url: _apiBase + '.json',
      success: function(todos) {
        _todos = todos
        that.changed()
      },
      error: function(error) {
        alert('error during fetch')
        console.log(error)
      }
    });
  },

  create: function(todo) {
    var that = this
    $.ajax({
      type: 'POST',
      url: _apiBase + '.json',
      data: {todo: todo},
      success: function(todo) {
        _todos.push(todo);
        that.changed()
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  destroy: function(todo) {
    var that = this
    $.ajax({
      type: 'DELETE',
      url: _apiBase + '/' + todo.id + '.json',
      data: {todo: todo},
      success: function(todo) {
        var idx = _todos.findIndex(function(item) {return item.id===todo.id})
        if (idx !== -1) {
          _todos.splice(idx, 1)
          that.changed()
        }
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  toggleDone: function(todo) {
    var that = this
    var done = !todo.done
    $.ajax({
      type: 'PATCH',
      url: _apiBase + '/' + todo.id + '.json',
      data: {todo: {done: done}},
      success: function() {
        todo.done = done
        that.changed()
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
