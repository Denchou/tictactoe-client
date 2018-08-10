const store = require('./store')

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
module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
