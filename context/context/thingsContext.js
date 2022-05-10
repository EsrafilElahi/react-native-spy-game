import React, { createContext, useReducer } from "react";
import { thingsReducer } from "../reducers/thingsReducer";
import { thingsState } from "./../initialStates/thingsState";

export const ThingsContext = createContext();

const ThingsContextProvider = (props) => {
  const [state, dispatch] = useReducer(thingsReducer, thingsState);
  return (
    <ThingsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThingsContext.Provider>
  );
};
export default ThingsContextProvider;
