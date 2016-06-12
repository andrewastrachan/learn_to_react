var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store

var _tracks = []

var TrackStore = new Store(ApplicationDispatcher)

TrackStore.all = function() {
  return _tracks.slice()
},

TrackStore.__addTrack = function(track) {
  if (_tracks.indexOf(track) == -1) {
    _tracks.push(track)
  }
  TrackStore.__emitChange()
},

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case 'ADDTRACK':
      TrackStore.__addTrack(payload.track)
      break
  }
}

module.exports = TrackStore
