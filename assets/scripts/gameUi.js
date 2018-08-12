const store = require('./store')
const gameLogic = require('./gameLogic')
const statsFunctions = require('./statsFunctions')

const onNewGameFailure = function (response) {
  $('#message').html('Something went wrong with the game, please check your internet connection.')
}

const onNewGameSuccess = function (response) {
  $('#message').html('Time to play Tic Tac Toe or Tie trying!')
  $('.box').empty()
  $('#gameboard').show()
  store.board = response
  store.tag = 'X'
}

const onPlaySuccess = function (event) {
  if (store.tag === 'X') {
    $('#message').html('Player ' + store.tag + ' made a move! Player O is next!')
  } else {
    $('#message').html('Player ' + store.tag + ' made a move! Player X is next!')
  }
  gameLogic.gameBoard(event)
}

const onPlayFailure = function () {
  $('#message').html('Something went wrong with the game, please check your internet connection.')
}

const onGameStatsSuccess = function (stats) {
  store.games = stats.games
  const complete = store.games.filter(over => over.over)
  const Xwins = complete.filter(win => statsFunctions.giveWinner(win.cells) === 'X')
  const Owins = complete.filter(win => statsFunctions.giveWinner(win.cells) === 'O')
  $('#message').html('<li>A total of ' + store.games.length + ' games have been created.</li>')
  $('#message').append('<li>You have ' + complete.length + ' completed games and ' + (store.games.length - complete.length) + ' unfinished games.</li>')
  $('#message').append('<li>Player X Victory total: ' + Xwins.length + '</li>')
  $('#message').append('<li>Player O victory total: ' + Owins.length + '</li>')
  $('#message').append('<li>Draw total: ' + ((complete.length - Xwins.length) - Owins.length) + '</li>')
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
