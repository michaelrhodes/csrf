var hmac = require('./hmac')

module.exports = verify

function verify (token) {
  var t = (token || '').split(':')
  var time = t[0]
  var salt = t[1]
  var hash = t[2]
  return recent(time) && hash === hmac(salt)
}

function recent (time) {
  var ms = parseInt(time, 16)
  if (isNaN(ms)) return false
  var diff = Date.now() - ms
  var mins = diff / 1000 / 60
  return mins < 15
}
