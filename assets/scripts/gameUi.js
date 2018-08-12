const store = require('./store')
const gameLogic = require('./gameLogic')
const statsFunctions = require('./statsFunctions')

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
  const Xwins = complete.filter(win => statsFunctions.giveWinner(win.cells) === 'X')
  console.log('Xwins is', Xwins, 'Complete is ', complete)
  $('#message').html('<li>A total of ' + store.games.length + ' games have been created.</li>')
  $('#message').append('<li>Out of ' + complete.length + ' completed games, Player X won ' + Xwins.length + ' while Player O won ' + (complete.length - Xwins.length) + '.</li>')
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
