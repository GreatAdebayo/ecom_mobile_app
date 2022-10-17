import { createContext, useReducer, useEffect } from "react";
import generalReducer from "./reducer";
import { SET_COLOR_MODE, IS_CONNECTED } from "./action";
import NetInfo from "@react-native-community/netinfo";
export const GeneralContext = createContext();

export const GeneralState = (props) => {
  const initialState = {
    bgColor: `#E5E5E5`,
    isConnected: true,
  };
  const [state, dispatch] = useReducer(generalReducer, initialState);

  const toggleColor = (index) => {
    dispatch({
      type: SET_COLOR_MODE,
      payload: index,
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
        bgColor: state.bgColor,
        isConnected: state.isConnected,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};
