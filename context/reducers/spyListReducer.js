export const spyListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SPY":
      return [...state, action.payload];
    case "CLEAR":
      return state = [];
    default:
      return state;
  }
};
