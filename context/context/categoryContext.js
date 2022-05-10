import React, { createContext, useReducer } from "react";
import { categoryReducer } from "../reducers/categoryReducer";
import { categoryState } from "../initialStates/categoryState";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [category, dispatch] = useReducer(categoryReducer, categoryState);
  return (
    <CategoryContext.Provider value={{ category, dispatch }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextProvider;
