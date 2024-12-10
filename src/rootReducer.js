import { combineReducers } from "redux";
import CartReducer from "./CartReducer";  // السلة
import counterReducer from "./counterReducer";  // العداد

const rootReducer = combineReducers({
  cart: CartReducer,    // سيحتوي على تفاصيل السلة
  count: counterReducer, // سيحتوي على عدد العناصر في السلة
});

export default rootReducer;