export const comparePrice = function (a,b) {
  if (a.basePrice === b.basePrice) {
    return 0
  } else if (a.basePrice > b.basePrice) {
    return -1
  } else {
    return 1
  }
}

export const compareValue = function (a,b) {
  const valA = a.attributes.length
  const valB = b.attributes.length
  if (valA === valB) {
    return 0
  } else if (valA > valB) {
    return -1
  } else {
    return 1
  }
}

export const compareDevCred = function (a,b) {
  if (a.devCred === b.devCred) {
    return 0
  } else if (a.devCred > b.devCred) {
    return -1
  } else {
    return 1
  }
}

export const compareDate = function (a,b) {
  const dateA = new Date(a.createdAt)
  const dateB = new Date(b.createdAt)
  if (dateA.getTime() === dateB.getTime()) {
    return 0
  } else if (dateA.getTime() > dateB.getTime()) {
    return -1
  } else {
    return 1
  }
}
