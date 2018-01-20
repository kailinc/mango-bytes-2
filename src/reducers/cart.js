const cartReducerDefaultState = {
  items: [],
  cost: null
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
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
