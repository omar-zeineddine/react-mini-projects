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
  // if (action.type === "INCREASE") {
  //   let tmpCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload) {
  //       // change quantity
  //       return { ...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return {
  //     ...state,
  //     cart: tmpCart,
  //   };
  // }

  // if (action.type === "DECREASE") {
  //   let tmpCart = state.cart
  //     .map((cartItem) => {
  //       if (cartItem.id === action.payload) {
  //         return { ...cartItem, amount: cartItem.amount - 1 };
  //       }
  //       return cartItem;
  //     })
  //     .filter((cartItem) => cartItem.amount !== 0);
  //   return {
  //     ...state,
  //     cart: tmpCart,
  //   };
  // }

  if (action.type === "GET_TOTALS") {
    // reduce that returns an object
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tmpCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          // id matches payload id and type is inc
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          // id matches payload id and type is dec
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tmpCart };
  }

  // state: current state before update
  // return state;
  throw new Error("no matching action type");
};

export default reducer;
