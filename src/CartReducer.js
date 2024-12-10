const initialState = {
  cart: [],
  count: 0, // إذا كنت تستخدم عداد المنتجات
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.count + 1,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};

export default CartReducer;