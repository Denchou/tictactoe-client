const store = require('./store')
const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('SIGN UP SUCCESS')
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('SIGN UP FAILED')
}
const onSignInSuccess = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('SIGN IN SUCCESS')
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('SIGN IN FAILED')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
