const userReducerDefaultState = {
  id: null,
  firstName: '',
  lastName: '',
  coderName: '',
  token: null,
  skills: [],
  devCred: 0,
  FireFigngers: false,
  PestControlla: false,
  DocKing: false,
  CoffeeAngel: false,
  TypeNO: false,
  WalkingGoogle: false
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        ...action.user
      };
    case 'RESET_USER':
      return {
        ...state,
        ...userReducerDefaultState
      };
    case 'UPDATE_ATTRIBUTES':
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};

export default userReducer;
