
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
