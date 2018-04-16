import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';
import shippingReducer from '../reducers/shipping';

export default (persistedState) => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer,
      shipping: shippingReducer
    }),
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
