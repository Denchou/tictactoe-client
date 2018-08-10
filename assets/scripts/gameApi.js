const config = require('./config')
const store = require('./store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newGame
}
