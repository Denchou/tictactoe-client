const store = require('./store')
const api = require('./api')
const onSignUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#message').html('SIGN UP SUCCESS. SIGN IN WITH YOUR USER NAME AND PASSWORD TO PLAY')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-out').show()
}
const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('SIGN UP FAILED')
}
const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#message').html('SIGN IN SUCCESS')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  store.user = response.user
}
const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('SIGN IN FAILED')
}
const onSignOutSuccess = function () {
  $('#message').html('SUCCESSFULLY SIGNED OUT')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}
const onSignOutFailure = function () {
  $('#message').html('SOMETHING WENT HORRIBLY WRONG!!!')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
