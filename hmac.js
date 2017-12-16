var crypto = require('crypto')
var secret = require('./secret')

module.exports = hmac

function hmac (buf) {
  return crypto
    .createHmac('sha1', secret)
    .update(buf)
    .digest('hex')
}
