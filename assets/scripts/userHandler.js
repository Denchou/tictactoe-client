const userEvent = require('./userEvent')

const userHandler = function () {
  $('#sign-up').on('submit', userEvent.onSignUp)
  $('#sign-in').on('submit', userEvent.onSignIn)
  $('#sign-out').on('submit', userEvent.onSignOut)
  $('#change-password').on('submit', userEvent.onChangePassword)
}

module.exports = {
  userHandler
}
