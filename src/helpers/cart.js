
export const itemExists = function (items, item_id) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].item_id === item_id) {
      return true
    }
  }
  return false
}

export const getQuantity = function (items, itemId) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].item_id === itemId) {
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

export const convertToDollars = function (num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g)
}

export const seperateAttr = function (curAttributes, attributes) {
  let newAtt = attributes.splice(0);
  let dupAtt = []

  for (let i = 0; i < curAttributes.length; i++) {
    for (let j = 0; j < newAtt.length; j++) {
      if (curAttributes[i].name === newAtt[j].name) {
        const removed = newAtt.splice(j, 1);
        dupAtt.push(removed[0]);
        break;
      }
    }
  }
  return [newAtt, dupAtt]
}
