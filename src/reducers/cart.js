const cartReducerDefaultState = {
  items: [],
  cost: 0
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_CART':
      return Object.assign({}, state, {
        items: [action.item]
      });
    case 'ADD_ITEM':
      return {
        ...state,
        items: action.items
      };
    case 'NEW_STORAGE':
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};

export default cartReducer
