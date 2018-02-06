'use strict'

// Constructor for Cart Object
let Cart = function (item) {
  this.items = [item],
  this.paid = false;
}

Cart.prototype.itemExists = function (itemId) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].id == itemId) {
      return true
    }
  }
  return false
}

//Methods needed

// add item to cart
Cart.prototype.addItem = function (item) {
  this.items.push(item)
}
// increase quantity

// decrease quantity

// remove item from cart

// get the total price

// get all the attribtues
module.exports = Cart;
