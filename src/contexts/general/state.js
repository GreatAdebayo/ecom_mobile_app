import { createContext, useReducer, useEffect } from "react";
import generalReducer from "./reducer";
import { SET_COLOR_MODE, IS_CONNECTED } from "./action";
import { useColorScheme } from "react-native";

export const GeneralContext = createContext();

export const GeneralState = (props) => {
  let colorScheme = useColorScheme();

  const initialState = {
    colorScheme,
    isConnected: true,
  };
  const [state, dispatch] = useReducer(generalReducer, initialState);

  const toggleColor = (scheme) => {
    dispatch({
      type: SET_COLOR_MODE,
      payload: scheme,
    });
  };

  const updateConnection = (connection) => {
    dispatch({
      type: IS_CONNECTED,
      payload: connection,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        toggleColor,
        colorScheme: state.colorScheme,
        isConnected: state.isConnected,
        updateConnection,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};
