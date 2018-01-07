var crypto = require('crypto')
var secret = require('./secret')
var buf32 = require('./buf32')

module.exports = hmac

function hmac (buf) {
  return buf32(crypto
    .createHmac('sha1', secret)
    .update(buf)
    .digest())
}
