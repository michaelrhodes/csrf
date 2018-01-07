module.exports = buf32

function buf32 (buf) {
  var str = ''
  buf.forEach(function (n) {
    str += n.toString(32)
  })
  return str
}
