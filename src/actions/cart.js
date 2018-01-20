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

export const addItem = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_ITEM',
    item: {
      description,
      note,
      amount,
      createdAt
    }
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
