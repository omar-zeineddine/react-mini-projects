import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data/data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);

  // pass reducer function, and initial state
  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };

  // useReducer, looks for reducer function (from reducer file), and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        // spread state values (loading, cart, total, amount)
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
