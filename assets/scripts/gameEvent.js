const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./store')

const onNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}
const onPlay = function (event) {
  event.preventDefault()
  if (!store.board.game.over) {
    gameApi.play(event)
      .then(gameUi.onPlaySuccess(event))
      .catch(gameUi.onPlayFailure)
  } else {
    $('#message').html('The game is over, please select Start New Game to play again.')
  }
}
module.exports = {
  onNewGame,
  onPlay
}
