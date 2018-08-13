const config = require('./config')
const store = require('./store')
// handles api call for game events
const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}
// api call when user plays a box
const play = function (event) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.board.game.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': event.target.id,
          'value': store.tag
        },
        'over': store.board.game.over
      }
    }
  })
}
// api call for game stats
const gameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
const replay = function (event) {
  return $.ajax({
    url: config.apiUrl + '/games/' + event.target.id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  play,
  gameStats,
  replay
}
