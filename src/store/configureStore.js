import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';

export default (persistedState) => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer
    }),
    persistedState
  );

  return store;
};
