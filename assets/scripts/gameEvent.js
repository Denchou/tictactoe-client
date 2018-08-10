const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
// const store = require('./store')

const onNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}
const onPlay = function (event) {
  event.preventDefault()
  gameApi.play(event)
    .then(gameUi.onPlaySuccess(event))
    .catch(gameUi.onPlayFailure)
}
module.exports = {
  onNewGame,
  onPlay
}
