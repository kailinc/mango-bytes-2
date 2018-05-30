export const comparePrice = function (a,b) {
  if (a.basePrice === b.basePrice) {
    return 0
  } else if (a.basePrice > b.basePrice) {
    return -1
  } else {
    return 1
  }
}
