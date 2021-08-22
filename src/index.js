module.exports = function reverse (n) {
    let a = Math.abs(n)
  let str = a.toString()
  let lng = str.length
  let i = 0
  let result = ''
  while (i < lng) {
      result = str[i] + result
      i++
  }
  return +result
}
