import React, { useContext, useMemo, useReducer } from "react";
import { createContext } from "react";
import reducer from "./AppReducer";

const AppContext = createContext<any>(null);

const AppState: React.FC<React.ReactNode> = ({ children }): JSX.Element => {
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
