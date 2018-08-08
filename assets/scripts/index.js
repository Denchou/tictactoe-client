'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

// game logic

let player = 1
// board is array of 9 objects
const checkWin = function (board) {
  if ((board.box[0] === board.box[1] === board.box[2]) ||
      (board.box[3] === board.box[4] === board.box[5]) ||
      (board.box[6] === board.box[7] === board.box[8]) ||
      (board.box[0] === board.box[3] === board.box[6]) ||
      (board.box[1] === board.box[7] === board.box[4]) ||
      (board.box[2] === board.box[5] === board.box[8]) ||
      (board.box[0] === board.box[4] === board.box[8]) ||
      (board.box[2] === board.box[4] === board.box[6])) {
    return true
  }
  return false
}
// board is array of 9 objects
const gameBoard = function (board, player) {
  if (checkWin(board)) {
    console.log('player', player, 'wins!')
  } else {
    console.log('oops')
  }
}
const sample = {
  box: ['X', 'X', 'X',
    null, null, null,
    null, null, null]
}
console.log(sample)
gameBoard(sample, player)
