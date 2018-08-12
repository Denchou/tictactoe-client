const store = require('./store')
const gameApi = require('./gameApi')

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

const checkOver = function () {
  // check to see if there is a winning combination
  // If a player wins or draw, returns true
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
    $('#message').html('The game is over.')
  } else if (store.tag === 'X' && event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  } else if (event.target.innerHTML === '') {
    event.target.innerHTML = store.tag
    board[event.target.id] = store.tag
  }
  console.log('board is', board, 'player is ', player, 'id is ')

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
