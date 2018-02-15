
export const itemExists = function (items, itemId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === itemId) {
      return true
    }
  }
  return false
}

export const getQuantity = function (items, itemId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === itemId) {
      return items[i].quantity
    }
  }
  return 0
}

// get total price
export const getTotal = function (items) {
  let total = 0
  for (let i = 0; i < items.length; i++) {
    total += items[i].quantity * items[i].basePrice
  }
  return total
}
// calculate taxes

//
