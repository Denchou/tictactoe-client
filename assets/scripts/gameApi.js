const config = require('./config')
const store = require('./store')

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

const play = function (event) {
  console.log('API:', event.target.id, 'over is', store.board.game.over, store.tag)
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
const gameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  play,
  gameStats
}
