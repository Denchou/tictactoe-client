const gameEvent = require('./gameEvent')
// listens for game-related events on webapp
function gameHandler () {
  $('.box').on('click', gameEvent.onPlay)
  $('#new-game').on('submit', gameEvent.onNewGame)
  $('#game-stats').on('submit', gameEvent.onGameStats)
}

module.exports = {
  gameHandler
}
