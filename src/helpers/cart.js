'use strict'

export const itemExists = function (items, itemId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === itemId) {
      return true
    }
  }
  return false
}
