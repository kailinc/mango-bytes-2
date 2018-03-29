export const newCart = (item) => ({
  type: 'NEW_CART',
  item: item
})

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item: item
})

export const updateQuantity = (item_id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    item_id: item_id,
    quantity: quantity
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
    items: []
});

export const removeItem = (item_id) => ({
    type: 'REMOVE_ITEM',
    item_id: item_id
});
