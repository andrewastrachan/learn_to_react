var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store

var _tracks = []

var TrackStore = new Store(ApplicationDispatcher)

TrackStore.all = function() {
  _tracks.slice()
},

TrackStore.addTrack = function(track) {
  _tracks.push(track)
  TrackStore.__emitChange()
},

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case 'ADDTRACK':
      TrackStore.addTrack(payload.track)
      break
  }
}
