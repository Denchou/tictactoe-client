'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')



// game logic

let player = 'X'
// player X begins first.
// board is array of 9 objects

const checkRow = function (board) {
  // check to see if there's a row winning combination
  if (board.box[0] !== '' &&
      (board.box[0] === board.box[1] &&
      board.box[0] === board.box[2])) {
    return true
  } else if (board.box[3] !== '' &&
          (board.box[3] === board.box[4] &&
          board.box[3] === board.box[5])) {
    return true
  } else if (board.box[6] !== '' &&
              (board.box[6] === board.box[7] &&
               board.box[6] === board.box[8])) {
    return true
  }
  return false
}
const checkCol = function (board) {
  // check to see if there's a column winning combination
  if (board.box[0] !== '' &&
      (board.box[0] === board.box[3] &&
      board.box[0] === board.box[6])) {
    return true
  } else if (board.box[1] !== '' &&
          (board.box[1] === board.box[4] &&
          board.box[1] === board.box[7])) {
    return true
  } else if (board.box[2] !== '' &&
              (board.box[2] === board.box[5] &&
               board.box[2] === board.box[8])) {
    return true
  }
  return false
}
const checkDia = function (board) {
  // check to see if there's a diagonal winning combination
  if (board.box[0] !== '' &&
      (board.box[0] === board.box[4] &&
      board.box[0] === board.box[8])) {
    return true
  } else if (board.box[2] !== '' &&
              (board.box[2] === board.box[4] &&
               board.box[2] === board.box[6])) {
    return true
  }
  return false
}

const checkWin = function (board) {
  // check to see if there is a winning combination
  if (checkRow(board)) {
    console.log('Win by Row')
    return true
  } else if (checkCol(board)) {
    console.log('Win by Column')
    return true
  } else if (checkDia(board)) {
    console.log('Win by Diagonally')
    return true
  }
  return false
}

const checkDraw = function (board) {
  // check to see if the game will end in a draw
  let count = 0
  for (let i = 0; i < board.box.length; i++) {
    if (board.box[i] === '') {
      count++
    }
  }
  if (count < 1) {
    return true
  }
  return false
}
// board is array of 9 objects
const gameBoard = function (board, player) {
  if (checkWin(board)) {
    console.log('player', player, 'wins!')
  } else if (checkDraw(board)) {
    console.log('The game is a tie')
  } else {
    console.log('Game not complete')
  }
  console.log('board is', board)
}
// const playBox ()
// $(() => {
//   // your JS code goes here
//   $('#0').on('click', playBox)
// })
