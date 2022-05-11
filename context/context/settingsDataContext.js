import React, { createContext, useReducer } from "react";
import { settingsDataReducer } from "../reducers/settingsDataReducer";
import { settingsDataState } from "../initialStates/settingsDataState";

export const SettingsDataContext = createContext();

const SettingsDataContextProvider = (props) => {
  const [settingsData, dispatch] = useReducer(settingsDataReducer, settingsDataState);
  return (
    <SettingsDataContext.Provider value={{ settingsData, dispatch }}>
      {props.children}
    </SettingsDataContext.Provider>
  );
};
export default SettingsDataContextProvider;
