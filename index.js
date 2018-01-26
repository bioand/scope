module.exports = function (arg) {
  let detail = arguments.length > 0 ? 'falsy' : 'empty'
  let message = `arg is ${detail}`
  return arg || {message}
}
