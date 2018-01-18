const userReducerDefaultState = {};

const userReducer = (state = userReducerDefaultState, action) => {
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

export default userReducer;
