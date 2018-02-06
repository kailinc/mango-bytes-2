export const newCart = (item) => ({
  type: 'NEW_CART',
  item: item
})

export const addItem = (updatedCart) => ({
    type: 'ADD_ITEM',
    items: updatedCart
});

export const eraseStorage = () => ({
    type: 'NEW_STORAGE',
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
