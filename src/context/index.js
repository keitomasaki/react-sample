import React, { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import appContextReducer from "./reducers";
import { DELETE_TODO, SET_TODO } from "./actionTypes";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(appContextReducer, initialState);

  const setTodo = (text) => {
    stateDispatch({
      type: SET_TODO,
      value: text,
    });
  };

  const deleteTodo = (selectId) => {
    stateDispatch({
      type: DELETE_TODO,
      value: selectId,
    });
  };

  const provided = {
    state,
    setTodo,
    deleteTodo,
  };
  return <AppContext.Provider value={provided}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
