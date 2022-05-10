import React, { createContext, useReducer } from "react";
import { locationReducer } from "../reducers/locationReducer";
import { locationState } from "../initialStates/locationState";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [state, dispatch] = useReducer(locationReducer, locationState);
  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LocationContext.Provider>
  );
};
export default LocationContextProvider;
