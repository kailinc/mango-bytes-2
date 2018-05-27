export const getNum = function (level) {
  if (level == 0) {
    return 'tilex0'
  }
  let num = Math.floor(Math.log2(level))
  return 'tile' + num
}
