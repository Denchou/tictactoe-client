const store = require('./store')
const gameApi = require('./gameApi')
// algorithm for the game engine

// returns true if there is a row win otherwise return false
const checkRow = function () {
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
// returns true if there is a column win otherwise return false
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
// returns true if there is a diagonal win otherwise return false
const checkDia = function () {
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
// returns true if there is a draw, otherwise return false
const checkDraw = function () {
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
// Checks current gameboard for any winning or draw combination and returns true
// Otherwise returns false
const checkOver = function () {
  const board = store.board.game.cells
  const isOver = store.board.game.over
  if (isOver) {
    $('#message').html('Game is over, please start a new game.')
  } else if (checkRow(board)) {
    $('#message').html('Player ' + store.tag + ' wins by getting 3 in a Row!')
    return store.tag
  } else if (checkCol(board)) {
    $('#message').html('Player ' + store.tag + ' wins by getting 3 in a Column!')
    return store.tag
  } else if (checkDia(board)) {
    $('#message').html('Player ' + store.tag + ' wins by getting 3 Diagonally!')
    return store.tag
  } else if (checkDraw(board)) {
    $('#message').html('There was an attempt to tic-tac-toe, but you both tied trying!')
    return store.tag
  }
  return false
}
// switches player between X and O
const switchPlayer = function () {
  if (store.tag === 'X') {
    store.tag = 'O'
  } else {
    store.tag = 'X'
  }
}
// This function takes in the current user's action and displays the mark on
// the board, also checks to see if there is any winning combination. If there
// is no winner, then it switch players and continues the game until the game
// ends. Updates API accordingly
const gameBoard = function (event) {
  const board = store.board.game.cells
  const winState = store.board.game.over
  if (winState) {
    $('#message').html('The game is over.')
  } else if (store.tag === 'X' && event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  } else if (event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  }

  if (checkOver()) {
    store.board.game.over = true
    gameApi.play(event)
  }
  switchPlayer()
}

module.exports = {
  gameBoard,
  checkOver
}
