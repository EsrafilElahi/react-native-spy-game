export const containerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CHANGE_ENABLE":
      return state.map(item => {
        return item.id === action.payload ? { ...item, isEnabled: !item.isEnabled } : item

      })
    default:
      return state;
  }
};
