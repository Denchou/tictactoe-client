const gameEvent = require('./gameEvent')

function gameHandler () {
  $('.box').on('click', gameEvent.onPlay)
  $('#new-game').on('submit', gameEvent.onNewGame)
  $('#game-stats').on('submit', gameEvent.onGameStats)
}

module.exports = {
  gameHandler
}
