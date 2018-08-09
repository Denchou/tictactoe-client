const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  signUp
}
