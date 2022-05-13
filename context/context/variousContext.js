import React, { createContext, useReducer } from "react";
import { variousReducer } from '../reducers/variousReducer';
import { variousState } from '../initialStates/variousState';


export const VariousContext = createContext();

const VariousContextProvider = (props) => {
  const [various, dispatch] = useReducer(variousReducer, variousState);
  return (
    <VariousContext.Provider value={{ various, dispatch }}>
      {props.children}
    </VariousContext.Provider>
  );
};
export default VariousContextProvider;
