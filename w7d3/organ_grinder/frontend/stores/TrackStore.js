var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store,
    TrackApiUtil = require('../util/TrackApiUtil')

var _tracks = []

var TrackStore = new Store(ApplicationDispatcher)

TrackStore.all = function() {
  return _tracks.slice()
},

TrackStore.__addTrack = function(track) {
  if (_tracks.indexOf(track) == -1) {TrackApiUtil.create(track)}
  TrackStore.__emitChange()
},

TrackStore.__trackAdded = function(track) {
  if (_tracks.indexOf(track) == -1) {_tracks.push(track)}
  TrackStore.__emitChange()
},

TrackStore.__deleteTrack = function(track) {
  if (_tracks.indexOf(track) !== -1) {TrackApiUtil.destroy(track)}
  TrackStore.__emitChange()
},

TrackStore.__trackDeleted = function(track) {
  var idx = _tracks.indexOf(track)
  if (idx !== -1) {TrackStore.splice(idx, 1)}
  TrackStore.__emitChange()
},

TrackStore.__setTracks = function(tracks) {
  _tracks = tracks
  TrackStore.__emitChange()
},

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case 'ADDTRACK':
      TrackStore.__addTrack(payload.track)
      break
    case 'TRACKADDED':
      TrackStore.__trackAdded(payload.track)
      break
    case 'DELETETRACK':
      TrackStore.__deleteTrack(payload.track)
      break
    case 'TRACKDELETED':
      TrackStore.__trackDeleted(payload.track)
      break
    case 'TRACKSLOADED':
      TrackStore.__setTracks(payload.tracks.tracks)
      break
  }
}

module.exports = TrackStore
