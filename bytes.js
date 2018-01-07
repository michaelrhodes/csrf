var crypto = require('crypto')
var buf32 = require('./buf32')

module.exports = bytes

function bytes (size) {
  return buf32(crypto.randomBytes(size))
}
