import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer
    })
  );

  return store;
};
