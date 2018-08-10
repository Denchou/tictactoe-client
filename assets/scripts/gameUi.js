const store = require('./store')

const onNewGameFailure = function (response) {
  $('#message').html('New Game FAILED')
  console.log(response)
}
const onNewGameSuccess = function (response) {
  $('#message').html('New Game Success')
  console.log(response)
}
module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
