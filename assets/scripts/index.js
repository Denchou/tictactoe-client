'use strict'

const gameHandler = require('./gameHandler')
const userHandler = require('./userHandler')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // your JS code goes here
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#gameboard').hide()
  $('#new-game').hide()
  $('#game-stats').hide()
  $('.pw').hide()
  gameHandler.gameHandler()
  userHandler.userHandler()
})
