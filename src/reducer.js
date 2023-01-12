const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      // filter: return ids that don't match payload id
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  // state: current state before update
  return state;
};

export default reducer;
