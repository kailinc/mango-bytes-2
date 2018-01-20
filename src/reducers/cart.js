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
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.item
      ];
    default:
      return state;
  }
};

export default cartReducer
