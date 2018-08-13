const store = require('./store')
const gameLogic = require('./gameLogic')
const statsFunctions = require('./statsFunctions')
const config = require('./config')

const onNewGameFailure = function (response) {
  $('#message').html('Something went wrong with the game, please check your internet connection.')
}

const onNewGameSuccess = function (response) {
  $('#message').html('Time to play Tic Tac Toe or Tie trying!')
  $('.box').empty()
  $('#gameboard').show()
  console.log(response)
  store.board = response
  store.tag = 'X'
}

const onPlaySuccess = function (event) {
  if (store.tag === 'X') {
    $('#message').html('Player ' + store.tag + " made the last move. It is Player O's turn.")
  } else {
    $('#message').html('Player ' + store.tag + " made the last move. It is Player X's turn.")
  }
  gameLogic.gameBoard(event)
}

const onPlayFailure = function () {
  $('#message').html('Something went wrong with the game, please check your internet connection.')
}

const onGameStatsSuccess = function (stats) {
  store.games = stats.games
  const complete = store.games.filter(over => over.over)
  const incomplete = store.games.filter(over => !(over.over))
  incomplete.sort(function (a, b) { return a.id - b.id })
  console.log(incomplete)
  const Xwins = complete.filter(win => statsFunctions.giveWinner(win.cells) === 'X')
  const Owins = complete.filter(win => statsFunctions.giveWinner(win.cells) === 'O')
  $('#message').html('<li>A total of ' + store.games.length + ' games have been created.</li>')
  $('#message').append('<li>You have ' + complete.length + ' completed games and ' + incomplete.length + ' unfinished games.</li>')
  $('#message').append('<li>Player X Victory total: ' + Xwins.length + '</li>')
  $('#message').append('<li>Player O victory total: ' + Owins.length + '</li>')
  $('#message').append('<li>Draw total: ' + ((complete.length - Xwins.length) - Owins.length) + '</li>')
  if (incomplete.length) {
    $('#message').append('<li>Replay old games:</li>')
    for (let i = 0; i < incomplete.length; i++) {
      const id = incomplete[i].id
      $('#message').append(`<button type='submit' id='${id}'>${i + 1}</button>`)
    }
  }
}

const onGameStatsFailure = function () {
  $('#message').html('Something went wrong with the game, please refresh your browser.')
}
const onReplaySuccess = function (response) {
  store.buggedGame = false
  if (statsFunctions.countX(response.game.cells) === statsFunctions.countO(response.game.cells)) {
    store.tag = 'X'
  } else {
    store.tag = 'O'
  }
  $('#gameboard').show()
  store.board = response
  statsFunctions.populate(response.game.cells)
  $('#message').html("Replaying an old game! It is player's " + store.tag + ' turn!')
  if (statsFunctions.giveWinner(response.game.cells)) {
    $('#message').html('The API was not updated properly for this game. Let me fix this for you. The game point went to: ' + statsFunctions.giveWinner(response.game.cells))
    store.board.game.over = true
    store.buggedGame = true
    // FFS!!! let me fix this for your
    $.ajax({
      url: config.apiUrl + '/games/' + store.board.game.id,
      method: 'PATCH',
      headers: {
        'Authorization': 'Token token=' + store.user.token
      },
      data: {
        'game': {
          'cell': {
            'index': null,
            'value': null
          },
          'over': store.board.game.over
        }
      }
    })
  }
}

const onReplayFailure = function (response) {
  $('#message').html('Unable to Replay the Game')
}
module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onPlaySuccess,
  onPlayFailure,
  onGameStatsSuccess,
  onGameStatsFailure,
  onReplaySuccess,
  onReplayFailure
}
