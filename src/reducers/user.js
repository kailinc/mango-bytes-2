const userReducerDefaultState = {
  id: null,
  firstName: '',
  lastName: '',
  coderName: '',
  token: 0
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};

export default userReducer;
