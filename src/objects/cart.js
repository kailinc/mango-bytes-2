'use strict'

// Constructor for Cart Object
let Cart = function (item) {
  this.items = [item],
  this.paid = false;
}

Cart.prototype.itemExists = function (itemId) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].id === itemId) {
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
Cart.prototype.updateQuantity = function (itemId, num) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].id === itemId) {
      this.items[i].quantity += num
      if (this.items[i].quantity <= 0) {
        this.removeItem(i)
      }
    }
  }
}

// remove item from cart
Cart.prototype.removeItem = function (index) {
  this.items.splice(index,1)
}

// get the total price

// get all the attribtues
module.exports = Cart;
