const cartReducerDefaultState = {
  items: [],
  cost: null
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_CART':
      return {
        ...state,
        items: action.items
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};

export default cartReducer
