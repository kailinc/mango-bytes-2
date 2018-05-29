import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';
import shippingReducer from '../reducers/shipping';
import shopReducer from '../reducers/shop';

export default (persistedState) => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer,
      shipping: shippingReducer,
      shop: shopReducer
    }),
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
