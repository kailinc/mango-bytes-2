const shopReducerDefaultState = {
  all: [],
  curItems: []
};

const shopReducer = (state = shopReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SHOP':
      return Object.assign({}, state, {
        all: action.all
      });
    default:
      return state;
  }
};

export default shopReducer
