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
  if (!store.board.game.over && event.target.innerHTML !== '') {
    $('#message').html('Try again, that box is occupied!')
  } else if (!store.board.game.over) {
    gameApi.play(event)
      .then(gameUi.onPlaySuccess(event))
      .catch(gameUi.onPlayFailure)
  } else {
    $('#message').html('GAME OVER MAN!')
  }
}
const onGameStats = function (event) {
  event.preventDefault()
  gameApi.gameStats()
    .then(gameUi.onGameStatsSuccess)
    .catch(gameUi.onGameStatsFailure)
}
module.exports = {
  onNewGame,
  onPlay,
  onGameStats
}
