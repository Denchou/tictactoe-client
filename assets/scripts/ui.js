const store = require('./store')
const onSignUpSuccess = function () {
  console.log('sign up success')
}
const onSignUpFailure = function () {
  console.log('sign up failure')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
