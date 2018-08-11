const store = require('./store')
const onSignUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#message').html('ACCOUNT SUCCESSFULLY CREATED! PLEASE SIGN IN TO PLAY!')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-out').show()
}
const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('FAILED TO SIGN UP. EITHER YOU ALREADY HAVE AN ACCOUNT OR YOUR PASSWORD DOES NOT MATCH YOUR CONFIRMATION PASSWORD.')
}
const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#message').html('WELCOME! CLICK ON START NEW GAME TO PLAY TIC-TAC-TOE')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#new-game').show()
  $('#game-stats').show()
  store.user = response.user
}
const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('SIGN IN FAILED. PLEASE CHECK YOUR USER ID OR PASSWORD.')
}
const onSignOutSuccess = function () {
  $('#message').html('GOODBYE!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#gameboard').hide()
  $('#game-stats').hide()
}
const onSignOutFailure = function () {
  $('#message').html('SOMEONE ELSE IS LOGGED INTO YOUR ACCOUNT. SIGN BACK IN TO KICK THEM OFF!')
  $('#sign-in').show()
}
const onChangePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').html('PASSWORD SUCCESSFULLY CHANGED')
}
const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#message').html('PASSWORD CHANGE FAILED. PLEASE CHECK YOUR OLD PASSWORD AND TRY AGAIN.')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
