export const newCart = (item) => ({
  type: 'NEW_CART',
  item: item
})

export const setCurCart = (items) => ({
  type: 'SET_CUR_CART',
  items: items
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


export const removeItem = (item_id) => ({
    type: 'REMOVE_ITEM',
    item_id: item_id
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
    items: []
});

export const newAttributes = (attributes) => ({
    type: 'NEW_ATTRIBUTES',
    attributes: attributes
});

export const addAttributes = (attributes) => ({
    type: 'ADD_ATTRIBUTES',
    attributes: attributes
});

export const updateAttributes = (attributes, quantity) => ({
    type: 'UPDATE_ATTRIBUTES',
    attributes: attributes,
    quantity: quantity
});

export const removeAttributes = (attributes, quantity) => ({
    type: 'REMOVE_ATTRIBUTES',
    attributes: attributes,
    quantity: quantity
});

export const clearAttributes = () => ({
    type: 'CLEAR_ATTRIBUTES',
    attributes: {}
});

export const updateId = (id) => ({
    type: 'UPDATE_ID',
    id: id
});

export const updateDevCred = (devCred) => ({
  type: 'UPDATE_DEVCRED',
  devCred: devCred
})

export const resetDevCred = () => ({
  type: 'RESET_DEVCRED'
})

export const updateProductTotal = (productTotal) => ({
  type: 'UPDATE_PRODUCT_TOTAL',
  productTotal: productTotal
})
