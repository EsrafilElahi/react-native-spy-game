export const spyListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SPY":
      return [...state, action.payload];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};
