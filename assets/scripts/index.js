'use strict'
const auth = require('./auth')
const gameEvent = require('./gameEvent')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// game logic

let player = 'X'
const board = ['', '', '', '', '', '', '', '', '']
let winState = false
// player X begins first.
// board is array of 9 objects

const checkRow = function () {
  // check to see if there's a row winning combination
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
  // check to see if there's a column winning combination
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
  if (winState) {
    $('#message').html('Game is over, please start a new game.')
  } else if (checkRow(board)) {
    $('#message').html(player + ' gets a Row win!')
    return true
  } else if (checkCol(board)) {
    $('#message').html(player + ' gets a Col win!')
    return true
  } else if (checkDia(board)) {
    $('#message').html(player + ' gets a Diagonal win!')
    return true
  } else if (checkDraw(board)) {
    $('#message').html('You tied trying!')
  }
  return false
}

const switchPlayer = function () {
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}
// board is array of 9 objects
const gameBoard = function (event) {
  if (player === 'X' && event.target.innerHTML === '') {
    event.target.innerHTML = player
    board[event.target.id] = player
  } else if (player === 'O' && event.target.innerHTML === '') {
    event.target.innerHTML = player
    board[event.target.id] = player
  }
  console.log('board is', board, 'player is ', player, 'id is ')
  if (checkWin(board)) {
    console.log('player', player, 'wins!')
    winState = true
    console.log(board)
  }
  switchPlayer()
}
// const playGame = function (event) {
//   if (player === 'X' && (event.target.innerHTML !== 'O' && event.target.innerHTML !== 'X')) {
//     $(event.target).html('X')
//   } else {
//     $(event.target).html('O')
//   }
// }

// const test = function (event) {
//   console.log(event)
//   console.log(event.target)
//   console.log(event.target.id)
//
//   $(event.target).html(`${event.target.id}`)
// }

$(() => {
  // your JS code goes here
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#gameboard').hide()
  $('#new-game').hide()
  $('#0').on('click', gameBoard)
  $('#1').on('click', gameBoard)
  $('#2').on('click', gameBoard)
  $('#3').on('click', gameBoard)
  $('#4').on('click', gameBoard)
  $('#5').on('click', gameBoard)
  $('#6').on('click', gameBoard)
  $('#7').on('click', gameBoard)
  $('#8').on('click', gameBoard)
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#new-game').on('submit', gameEvent.onNewGame)
})
