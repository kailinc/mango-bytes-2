export const getNum = function (level) {
  if (level == 0) {
    return 'x0'
  }
  let num = Math.floor(Math.log2(level))
  return '' + num
}
