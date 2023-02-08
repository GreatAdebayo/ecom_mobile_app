import { createContext, useReducer, useEffect } from "react";
import generalReducer from "./reducer";
import { SET_COLOR_MODE, IS_CONNECTED } from "./action";
import NetInfo from "@react-native-community/netinfo";
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

  useEffect(() => {
    (async () => {
      const response = await NetInfo.fetch();
      dispatch({
        type: IS_CONNECTED,
        payload: response.isConnected,
      });
    })();
  }, [state.isConnected]);
  return (
    <GeneralContext.Provider
      value={{
        toggleColor,
        colorScheme: state.colorScheme,
        isConnected: state.isConnected,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};
