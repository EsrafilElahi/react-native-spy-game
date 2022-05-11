import React, { createContext, useReducer } from "react";
import { containerReducer } from "../reducers/containerReducer";
import { containerState } from "../initialStates/containerState";


export const ContainerContext = createContext();

const ContainerContextProvider = (props) => {
  const [state, dispatch] = useReducer(containerReducer, containerState);
  return (
    <ContainerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ContainerContext.Provider>
  );
};
export default ContainerContextProvider;
