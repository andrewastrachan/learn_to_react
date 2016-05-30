var _todoSteps = {};
var _callbacks = [];
var _apiBase = 'http://localhost:3000/api/todos'

var TodoStepStore = {
  all: function(todoId) {
    debugger
    return _todoSteps[todoId] || [];
  },

  fetch: function(todoId) {
    var that = this
    $.ajax({
      url: this.todoStepBaseUrl(todoId),
      success: function(todoSteps) {
        _todoSteps[todoId] = todoSteps
        that.changed()
      },
      error: function(error) {
        alert('error during fetch')
        console.log(error)
      }
    });
  },

  create: function(todoStep) {
    var that = this
    $.ajax({
      type: 'POST',
      url: this.todoStepBaseUrl(todoStep.todo_id),
      data: {todo_step: todoStep},
      success: function(todoStep) {
        _todoSteps[todoStep.todo_id].push(todoStep);
        that.changed()
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  destroy: function(todoStep) {
    var that = this
    $.ajax({
      type: 'DELETE',
      url: this.todoStepPutDeleteUrl(todoStep),
      data: {todo_step: todoStep},
      success: function(todoStep) {
        var idx = _todoSteps[todoStep.todo_id].findIndex(function(item) {return item.id===todoStep.id})
        if (idx !== -1) {
          _todoSteps[todoStep.todo_id].splice(idx, 1)
          that.changed()
        }
      },
      error: function(error) {
        alert('error during create')
        console.log(error)
      }
    })
  },

  toggleDone: function(todoStep) {
    var that = this
    var done = !todoStep.done
    $.ajax({
      type: 'PATCH',
      url: this.todoStepPutDeleteUrl(todoStep),
      data: {todo_step: {done: done}},
      success: function() {
        todoStep.done = done
        that.changed()
      },
      error: function(error) {
        alert('error during update')
        console.log(error)
      }
    })
  },

  todoStepBase: function(todoId) {
    return _apiBase + '/' + todoId + '/' + 'todo_steps'
  },

  todoStepBaseUrl: function(todoId) {
    return this.todoStepBase(todoId) + '.json'
  },

  todoStepPutDeleteUrl: function(todoStep) {
    return this.todoStepBase(todoStep.todo_id) + '/' + todoStep.id + '.json'
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

module.exports = TodoStepStore;
