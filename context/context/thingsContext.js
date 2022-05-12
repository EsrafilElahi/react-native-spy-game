import React, { createContext, useReducer } from "react";
import { thingsReducer } from "../reducers/thingsReducer";
import { thingsState } from "../initialStates/thingsState";


export const ThingsContext = createContext();

const ThingsContextProvider = (props) => {
  const [things, dispatch] = useReducer(thingsReducer, thingsState);
  return (
    <ThingsContext.Provider value={{ things, dispatch }}>
      {props.children}
    </ThingsContext.Provider>
  );
};
export default ThingsContextProvider;
