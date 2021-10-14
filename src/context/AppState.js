import React, { useContext, useMemo, useReducer } from "react";
import { createContext } from "react";
import reducer from "./AppReducer";

const AppContext = createContext();

const AppState = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  const contextValue = useMemo(() => {
    return { todos, dispatch };
  }, [todos, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppState, useAppContext };
