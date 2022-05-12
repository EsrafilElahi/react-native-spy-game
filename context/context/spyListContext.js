import React, { createContext, useReducer } from "react";
import { spyListReducer } from "../reducers/spyListReducer";
import { spyListState } from "../initialStates/spyListState";


export const SpyListContext = createContext();

const SpyListContextProvider = (props) => {
  const [spyList, dispatch] = useReducer(spyListReducer, spyListState);
  return (
    <SpyListContext.Provider value={{ spyList, dispatch }}>
      {props.children}
    </SpyListContext.Provider>
  );
};
export default SpyListContextProvider;
