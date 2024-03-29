import { SET_COLOR_MODE, IS_CONNECTED } from "./action";

const generalReducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR_MODE:
      return {
        ...state,
        colorScheme: action.payload,
      };

    case IS_CONNECTED:
      return {
        ...state,
        isConnected: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
