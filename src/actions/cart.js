export const newCart = (item) => ({
  type: 'NEW_CART',
  item: item
})

export const addItem = (item) => ({
  type: 'ADD_ITEM',
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

export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    itemId: itemId
});
