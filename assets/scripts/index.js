'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

// game logic

let player = 'X'
// board is array of 9 objects

const checkRow = function (board) {
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

const checkWin = function (board) {
  if (checkRow(board)) {
    console.log('Win by Row')
    return true
  }
  if (checkCol(board)) {
    console.log('Win by Col')
    return true
  }
}
// board is array of 9 objects
const gameBoard = function (board, player) {
  if (checkWin(board)) {
    console.log('player', player, 'wins!')
  } else {
    console.log('LOSE', player)
  }
  console.log('board is', board)
}
const sample = {
  box: ['X', 'X', 'O',
    'X', 'X', 'O',
    'O', 'X', 'X']
}

gameBoard(sample, player)
