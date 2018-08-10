const gameEvent = require('./gameEvent')

function gameHandler () {
  $('.box').on('click', gameEvent.onPlay)
  // $('#1').on('click', gameBoard)
  // $('#2').on('click', gameBoard)
  // $('#3').on('click', gameBoard)
  // $('#4').on('click', gameBoard)
  // $('#5').on('click', gameBoard)
  // $('#6').on('click', gameBoard)
  // $('#7').on('click', gameBoard)
  // $('#8').on('click', gameBoard)
}

module.exports = {
  gameHandler
}
