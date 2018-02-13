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
            items: state.items.concat([action.item])
        };
    case 'UPDATE_QUANTITY':
      return Object.assign({}, state, {
        items: state.items.map((cur, i) => {
          if (cur.id === action.itemId) {
            cur.quantity += action.quantity
          }
          return cur
        }).filter((item) => item.quantity > 0)
      });
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter( item => item.id != action.itemId)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};

export default cartReducer
