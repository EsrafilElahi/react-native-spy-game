import React, { createContext, useReducer } from "react";
import { variousReducer } from "../reducers/variousReducer";
import { variousState } from "./../initialStates/variousState";

export const VariousContext = createContext();

const VariousContextProvider = (props) => {
  const [state, dispatch] = useReducer(variousReducer, variousState);
  return (
    <VariousContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VariousContext.Provider>
  );
};
export default VariousContextProvider;
