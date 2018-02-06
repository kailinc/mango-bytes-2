export const newCart = (item) => ({
  type: 'NEW_CART',
  item: item
})

export const updateQuantity = (itemId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    itemId: itemId,
    quantity: quantity
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
    items: []
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
