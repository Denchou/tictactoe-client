const store = require('./store')
const gameLogic = require('./gameLogic')

const onNewGameFailure = function (response) {
  $('#message').html('Something went wrong with the game, please check your internet connection.')
}

const onNewGameSuccess = function (response) {
  $('#message').html('Time to play Tic Tac Toe or TIE TRYING!')
  $('.box').empty()
  $('#gameboard').show()
  store.board = response
  store.tag = 'X'
}

const onPlaySuccess = function (event) {
  $('#message').html('Player ' + store.tag + ' made a move!')
  gameLogic.gameBoard(event)
}

const onPlayFailure = function () {
  $('#message').html('Something went wrong with the game, please refresh your browser.')
}

const onGameStatsSuccess = function (stats) {
  store.games = stats.games
  const complete = store.games.filter(over => over.over)
  $('#message').html('<li>A total of ' + store.games.length + ' games have been played.</li>')
  $('#message').append('<li>A total of ' + complete.length + ' games have been completed.</li>')
  $('#message').append('<li>You have ' + (store.games.length - complete.length) + ' unfinished games.</li>')
  console.log(store.games)
}

const onGameStatsFailure = function () {
  $('#message').html('Something went wrong with the game, please refresh your browser.')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onPlaySuccess,
  onPlayFailure,
  onGameStatsSuccess,
  onGameStatsFailure
}
