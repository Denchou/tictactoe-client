const gameApi = require('./gameApi')
const gameUi = require('./gameUi')

const onNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}
module.exports = {
  onNewGame
}
