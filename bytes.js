var crypto = require('crypto')

module.exports = bytes

function bytes (size) {
  return crypto
    .randomBytes(size)
    .toString('hex')
}
