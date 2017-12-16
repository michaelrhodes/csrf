var bytes = require('./bytes')
var hmac = require('./hmac')

module.exports = generate

function generate () {
  var time = now()
  var salt = bytes(4)
  var hash = hmac(salt)
  var token = time + ':' + salt + ':' + hash
  return token
}

function now () {
  return Date.now()
    .toString(16)
}
