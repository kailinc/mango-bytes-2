export const newCart = ([{ id, name, devCred, basePrice, attributes, img, quantity }]) => ({
  type: 'NEW_CART',
  items: [{
    id,
    name,
    devCred,
    basePrice,
    attributes,
    img,
    quantity
  }]
})

export const addItem = (updatedCart) => ({
    type: 'ADD_ITEM',
    items: updatedCart
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
