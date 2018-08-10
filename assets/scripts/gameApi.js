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
  // console.log('event target id is', event.target.id, 'over is', store.board.game.over, store.tag)
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

module.exports = {
  newGame,
  play
}
