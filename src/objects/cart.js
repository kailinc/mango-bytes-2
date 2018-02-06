'use strict'

// Constructor for Cart Object
let Cart = function (item) {
  this.items = [item],
  this.paid = false;
}

// function to increase quantity by certain amount
Cart.prototype.itemExists = function (itemId) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].id == itemId) {
      return true
    }
  }
  return false
}

module.exports = Cart;
