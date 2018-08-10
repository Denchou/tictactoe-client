'use strict'
const auth = require('./auth')
const gameEvent = require('./gameEvent')
const gameEngine = require('./gameEngine')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// game logic

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
  $('#0').on('click', gameEngine.gameBoard)
  $('#1').on('click', gameEngine.gameBoard)
  $('#2').on('click', gameEngine.gameBoard)
  $('#3').on('click', gameEngine.gameBoard)
  $('#4').on('click', gameEngine.gameBoard)
  $('#5').on('click', gameEngine.gameBoard)
  $('#6').on('click', gameEngine.gameBoard)
  $('#7').on('click', gameEngine.gameBoard)
  $('#8').on('click', gameEngine.gameBoard)
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#new-game').on('submit', gameEvent.onNewGame)
})
