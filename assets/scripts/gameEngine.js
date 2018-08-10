const store = require('./store')
const gameEvent = require('./gameEvent')

const checkRow = function () {
  // check to see if there's a row winning combination
  const board = store.board.game.cells
  if (board[0] !== '' &&
      (board[0] === board[1] &&
      board[0] === board[2])) {
    return true
  } else if (board[3] !== '' &&
          (board[3] === board[4] &&
          board[3] === board[5])) {
    return true
  } else if (board[6] !== '' &&
              (board[6] === board[7] &&
               board[6] === board[8])) {
    return true
  }
  return false
}
const checkCol = function () {
  const board = store.board.game.cells
  if (board[0] !== '' &&
      (board[0] === board[3] &&
      board[0] === board[6])) {
    return true
  } else if (board[1] !== '' &&
          (board[1] === board[4] &&
          board[1] === board[7])) {
    return true
  } else if (board[2] !== '' &&
              (board[2] === board[5] &&
               board[2] === board[8])) {
    return true
  }
  return false
}
const checkDia = function () {
  // check to see if there's a diagonal winning combination
  const board = store.board.game.cells
  if (board[0] !== '' &&
      (board[0] === board[4] &&
      board[0] === board[8])) {
    return true
  } else if (board[2] !== '' &&
              (board[2] === board[4] &&
               board[2] === board[6])) {
    return true
  }
  return false
}

const checkDraw = function () {
  // check to see if the game will end in a draw
  const board = store.board.game.cells
  let count = 0
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      count++
    }
  }
  if (count === 0) {
    return true
  }
  return false
}

const checkWin = function () {
  // check to see if there is a winning combination
  const board = store.board.game.cells
  const winState = store.board.game.over
  if (winState) {
    $('#message').html('Game is over, please start a new game.')
  } else if (checkRow(board)) {
    $('#message').html('Player ' + store.tag + ' gets a Row win!')
    return true
  } else if (checkCol(board)) {
    $('#message').html('Player ' + store.tag + ' gets a Column Win!')
    return true
  } else if (checkDia(board)) {
    $('#message').html('Player ' + store.tag + ' gets a Diagonal win!')
    return true
  } else if (checkDraw(board)) {
    $('#message').html('You tied trying!')
  }
  return false
}

const switchPlayer = function () {
  if (store.tag === 'X') {
    store.tag = 'O'
  } else {
    store.tag = 'X'
  }
}
// board is array of 9 objects
const gameBoard = function (event) {
  const board = store.board.game.cells
  const player = store.board.game.player_x.email
  const winState = store.board.game.over
  if (winState) {
    $('#message').html('The game is over')
  } else if (store.tag === 'X' && event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  } else if (event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  }
  console.log('board is', board, 'player is ', player, 'id is ')

  if (checkWin()) {
    console.log('player', player, 'wins!')
    store.board.game.over = true
    console.log(board)
  }
  switchPlayer()
}

function gameHandlers () {
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
  gameBoard,
  gameHandlers
}
