const userReducerDefaultState = {
  id: null,
  firstName: '',
  lastName: '',
  coderName: '',
  token: null,
  skills: [],
  powers: [],
  devCred: 0
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        ...action.user
      };
    case 'SIGN_OUT':
      return {
        ...state,
        ...userReducerDefaultState
      };
    default:
      return state;
  }
};

export default userReducer;
