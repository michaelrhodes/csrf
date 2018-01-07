var hmac = require('./hmac')

var max = process.env.CSRF_TOKEN_MAX_AGE || 15

module.exports = verify

function verify (token) {
  var t = (token || '').split(':')
  var time = t[0]
  var salt = t[1]
  var hash = t[2]
  return recent(time) && hash === hmac(salt)
}

function recent (time) {
  var ms = parseInt(time, 32)
  if (isNaN(ms)) return false
  var diff = Date.now() - ms
  var mins = diff / 1000 / 60
  return mins <= max
}
