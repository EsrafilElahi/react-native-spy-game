export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { category: action.payload };
    default:
      return state;
  }
};
