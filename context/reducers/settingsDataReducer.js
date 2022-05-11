export const settingsDataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SETTINGS_DATA_PLAYER":
      return { ...state, player: action.payload.player };
    case "CHANGE_SETTINGS_DATA_SPY":
      return { ...state, spy: action.payload.spy };
    case "CHANGE_SETTINGS_DATA_TIMER":
      return { ...state, timer: action.payload.timer };
    default:
      return state;
  }
};
