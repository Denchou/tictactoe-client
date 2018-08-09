const getFormFields = require('../../lib/get-form-fields')

const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event)
}

module.exports = {
  signUp
}
