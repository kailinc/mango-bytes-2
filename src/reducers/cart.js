const cartReducerDefaultState = {
  items: [],
  cost: 0,
  attributes: []
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
          if (cur.item_id === action.item_id) {
            cur.quantity += action.quantity
          }
          return cur
        }).filter((item) => item.quantity > 0)
      });
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter( item => item.item_id !== action.item_id)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: action.items
      };
    case 'NEW_ATTRIBUTES':
      return Object.assign({}, state, {
        attributes: [action.attributes]
      });
    default:
      return state;
  }
};

export default cartReducer
