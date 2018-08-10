const store = require('./store')
const gameLogic = require('./gameLogic')

const onNewGameFailure = function (response) {
  $('#message').html('New Game FAILED')
  console.log(response)
}
const onNewGameSuccess = function (response) {
  $('#message').html('New Game Success')
  $('.box').empty()
  $('#gameboard').show()
  store.board = response
  store.tag = 'X'
  console.log('store board and tag is', store.board, store.tag)
}
const onPlaySuccess = function (event) {
  $('#message').html('Player ' + store.tag + ' made a move!')
  gameLogic.gameBoard(event)
}
const onPlayFailure = function () {
  $('#message').html('FUBAR FUBAR FUBAR')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onPlaySuccess,
  onPlayFailure
}
