const config = require('./config')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data
  })
}

module.exports = {
  newGame
}
