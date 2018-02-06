'use strict'

export const itemExists = function (items, itemId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === itemId) {
      return true
    }
  }
  return false
}

export const updateQuantity = function (items, itemId, num) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === itemId) {
      items[i].quantity += num
      if (items[i].quantity <= 0) {
        items.splice(i,1)
      }
    }
  }
}
