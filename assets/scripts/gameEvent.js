const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./store')
// handles game-related events

// handles game event to create new game board
const onNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}
// handles game event to register player's move
const onPlay = function (event) {
  event.preventDefault()
  if (!store.board.game.over && event.target.innerHTML !== '') {
    $('#message').html('Invalid move! That box is occupied! Maybe you need to <a target="_blank" href="https://en.wikipedia.org/wiki/Tic-tac-toe">learn</a> how to play?')
  } else if (!store.board.game.over) {
    gameApi.play(event)
      .then(gameUi.onPlaySuccess(event))
      .catch(gameUi.onPlayFailure)
  } else {
    $('#message').html('The game is over. In order to play again, please click Start New Game.')
  }
}
// handles game event to display player's game stats
const onGameStats = function (event) {
  event.preventDefault()
  gameApi.gameStats()
    .then(gameUi.onGameStatsSuccess)
    .catch(gameUi.onGameStatsFailure)
}
const onReplay = function (event) {
  event.preventDefault()
  gameApi.replay(event)
    .then(gameUi.onReplaySuccess)
    .catch(gameUi.onReplayFailure)
}
module.exports = {
  onNewGame,
  onPlay,
  onGameStats,
  onReplay
}
