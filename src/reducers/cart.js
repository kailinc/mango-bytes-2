const cartReducerDefaultState = {
  items: [],
  cost: 0,
  attributes: {},
  id: '',
  devCred: 0
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_CART':
      return Object.assign({}, state, {
        items: [action.item]
      });
    case 'UPDATE_ID':
      return Object.assign({}, state, {
        id: action.id
      });
    case 'SET_CUR_CART':
      return Object.assign({}, state, {
        items: action.items
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
        attributes: action.attributes
      });
    case 'ADD_ATTRIBUTES':
        return {
            ...state,
            attributes: state.attributes.concat(action.attributes)
        };
    case 'UPDATE_ATTRIBUTES':
      let attObj = Object.assign({}, state.attributes);

      for (let att in action.attributes) {
         if (state.attributes.hasOwnProperty(att)) {
           attObj[att] = (action.attributes[att] * action.quantity) + state.attributes[att]
         } else {
           attObj[att] = action.attributes[att] * action.quantity
         }
         if (attObj[att] <= 0) {
           delete attObj[att]
         }
      }
      return {
        ...state,
        attributes: attObj
      };
    case 'REMOVE_ATTRIBUTES':
      let newAtt = Object.assign({}, state.attributes);

      for (let i = 0; i < action.attributes.length; i++) {
          let name = action.attributes[i].name
          let exp = action.attributes[i].exp
          newAtt[name] = newAtt[name] - (exp * action.quantity)
          if (newAtt[name] <= 0) {
            delete newAtt[name]
          }
      }
      return {
        ...state,
        attributes: newAtt
      };
    case 'CLEAR_ATTRIBUTES':
      return {
        ...state,
        attributes: action.attributes
      };
    case 'UPDATE_DEVCRED':
        return {
            ...state,
            devCred: state.devCred + action.devCred
        };
    default:
      return state;
  }
};

export default cartReducer
