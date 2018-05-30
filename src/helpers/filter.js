export const comparePrice = function (a,b) {
  return a.basePrice - b.basePrice;
}

export const compareValue = function (a,b) {
  return a.attributes.length - b.attributes.length
}

export const compareDevCred = function (a,b) {
  return a.devCred - b.devCred
}

export const compareDate = function (a,b) {
  const dateA = new Date(a.createdAt)
  const dateB = new Date(b.createdAt)
  return dateA.getTime() <= dateB.getTime() ? 1 : -1;
}
