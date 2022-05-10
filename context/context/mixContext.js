import React, { createContext, useReducer } from "react";
import { mixReducer } from "../reducers/mixReducer";
import { mixState } from "../initialStates/mixState";

export const MixContext = createContext();

const MixContextProvider = (props) => {
  const [state, dispatch] = useReducer(mixReducer, mixState);
  return (
    <MixContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MixContext.Provider>
  );
};
export default MixContextProvider;
