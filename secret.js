var bytes = require('./bytes')

module.exports = process.env.CSRF_SECRET || bytes(10)
