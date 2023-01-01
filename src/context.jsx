import { createContext } from "react";
import { useState, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// add custom hook, to avoid extra imports
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
