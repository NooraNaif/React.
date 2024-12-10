import { createStore, combineReducers } from 'redux';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  cartState: CartReducer,
});

const store = createStore(rootReducer);

export default store;