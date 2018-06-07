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
  const dollars = num / 100;
  return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
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

export const getAttr = function (attributes, skill) {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].name === skill) {
      return attributes[i].exp;
    }
  }
  return 0;
}

export const formatAttributes = function (attributes) {
    let formatted = {}
    for (let i = 0; i < attributes.length; i++) {
      formatted[attributes[i].name] = attributes[i].exp
    }
    return formatted;
}

export const formatItems = function (items) {
  let modItems = []
  let length = items.length
  for(let i = 0; i < length; i++) {
    const item = {
        item_id: items[i].item_id,
        name: items[i].name,
        devCred: items[i].devCred,
        basePrice: items[i].basePrice,
        attributes: items[i].attributes,
        img: items[i].img,
        quantity: items[i].quantity
    }
    modItems.push(item)
  }
  return modItems
}
