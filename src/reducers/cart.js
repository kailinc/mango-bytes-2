const cartReducerDefaultState = {};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    default:
      return state;
  }
};

export default cartReducer
