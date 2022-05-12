export const locationReducer = (state, action) => {

  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CHANGE_ENABLE":
      let copyData = [...state];
      let updatedData = copyData.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEnabled: !item.isEnabled };
        }
        return item;
      });

      return updatedData

    default:
      return state;
  }
};
