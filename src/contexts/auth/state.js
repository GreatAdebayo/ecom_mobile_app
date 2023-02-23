import { createContext, useReducer } from "react";
import authReducer from "./reducer";
import {
  SUBMITTING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_MSG,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAIL,
  RESEND_CODE_SUCCESS,
  RESEND_CODE_FAIL,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  CHECKEMAIL_FAIL,
  CHECKEMAIL_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  IS_LOADING,
  SIGNOUT,
} from "./action";
import axios from "axios";
import { baseUrl, userServiceUrl } from "../../utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import setAuthToken from "./setAuthToken";

export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isSubmitting: false,
    signupFailMsg: null,
    signupSuccessMsg: null,
    sendCodeSuccessMsg: null,
    sendCodeFailMsg: null,
    confirmFailMsg: null,
    signInFailMsg: null,
    checkEMailFailMsg: null,
    checkEmailSuccessMsg: null,
    updatePasswordSuccessMsg: null,
    updatePasswordFailMsg: null,
    isAuthenticated: false,
    isLoading: false,
    userInfo: null,
    token: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const setSubmitting = () => {
    dispatch({
      type: SUBMITTING,
    });
  };

  const clearMsg = () => {
    dispatch({
      type: CLEAR_MSG,
    });
  };

  const setLoading = () => {
    dispatch({
      type: IS_LOADING,
    });
  };

  const persitSignin = async () => {
    setLoading();
    let token = await AsyncStorage.getItem("@Auth_key");
    if (token !== null) {
      setAuthToken(token);
      try {
        let res = await axios.get(`${baseUrl}/user`);
        const { user } = res.data;
        dispatch({
          type: LOAD_USER,
          payload: user,
        });
      } catch (error) {
        const { data } = error.response;
        await AsyncStorage.removeItem("@Auth_key");
        if (error.message === "Network Error") {
          dispatch({
            type: LOAD_USER_ERROR,
            payload: "couldn't load user infos",
          });
        } else {
          dispatch({
            type: LOAD_USER_ERROR,
            payload: data.message,
          });
        }
      }
    } else {
      await AsyncStorage.removeItem("@Auth_key");
      dispatch({
        type: LOAD_USER_ERROR,
        payload: "unauthorized",
      });
    }
  };

  const signUp = async (values) => {
    setSubmitting();
    try {
      const res = await axios.post(
        `${userServiceUrl}signup/ecomm`,
        values,
        config
      );
      const { data, message } = res.data;
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { msg: message, email: data },
      });
    } catch (error) {
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: SIGNUP_FAIL,
          payload: "couldn't signup",
        });
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const confirmEmail = async ({ values, email }) => {
    setSubmitting();
    try {
      const res = await axios.post(
        `${userServiceUrl}verify-code`,
        {
          code: parseInt(values.code),
          email,
        },
        config
      );
      const { token } = res.data;
      await AsyncStorage.setItem("@Auth_key", token);
      persitSignin();
      dispatch({
        type: CONFIRM_EMAIL_SUCCESS,
        payload: token,
      });
    } catch (error) {
      await AsyncStorage.removeItem("@Auth_key");
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: CONFIRM_EMAIL_FAIL,
          payload: "couldn't confirm email",
        });
      } else {
        dispatch({
          type: CONFIRM_EMAIL_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const resendCode = async (email) => {
    setSubmitting();
    try {
      const res = await axios.post(`${userServiceUrl}resend-code/${email}`);
      const { data } = res;
      dispatch({
        type: RESEND_CODE_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: RESEND_CODE_FAIL,
          payload: "couldn't send code",
        });
      } else {
        dispatch({
          type: RESEND_CODE_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const signIn = async (values) => {
    setSubmitting();
    try {
      const res = await axios.post(`${userServiceUrl}signin`, values, config);
      const { token } = res.data;
      await AsyncStorage.setItem("@Auth_key", token);
      persitSignin();
      dispatch({ type: SIGNIN_SUCCESS, payload: token });
    } catch (error) {
      await AsyncStorage.removeItem("@Auth_key");
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: SIGNIN_FAIL,
          payload: "couldn't signin",
        });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const checkEmail = async ({ email }) => {
    setSubmitting();
    try {
      const res = await axios.get(`${userServiceUrl}passwordreset/${email}`);
      dispatch({
        type: CHECKEMAIL_SUCCESS,
        payload: { msg: res.data.message, email: res.data.email },
      });
    } catch (error) {
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: CHECKEMAIL_FAIL,
          payload: "couldn't check email",
        });
      } else {
        dispatch({
          type: CHECKEMAIL_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const updatePassword = async (values) => {
    setSubmitting();
    try {
      const res = await axios.put(
        `${userServiceUrl}passwordreset`,
        { ...values, code: parseInt(values.code) },
        config
      );
      const { data } = res;
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      const { data } = error.response;
      if (error.message === "Network Error") {
        dispatch({
          type: UPDATE_PASSWORD_FAIL,
          payload: "couldn't update password",
        });
      } else {
        dispatch({
          type: UPDATE_PASSWORD_FAIL,
          payload: data.message,
        });
      }
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("@Auth_key");
    dispatch({
      tpye: SIGNOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isSubmitting: state.isSubmitting,
        signUp,
        signupSuccessMsg: state.signupSuccessMsg,
        signupFailMsg: state.signupFailMsg,
        clearMsg,
        confirmEmail,
        userInfo: state.userInfo,
        resendCode,
        sendCodeSuccessMsg: state.sendCodeSuccessMsg,
        sendCodeFailMsg: state.sendCodeFailMsg,
        confirmFailMsg: state.confirmFailMsg,
        isAuthenticated: state.isAuthenticated,
        signIn,
        signInFailMsg: state.signInFailMsg,
        checkEmail,
        checkEmailSuccessMsg: state.checkEmailSuccessMsg,
        checkEmailFailMsg: state.checkEmailFailMsg,
        updatePassword,
        updatePasswordSuccessMsg: state.updatePasswordSuccessMsg,
        updatePasswordFailMsg: state.updatePasswordFailMsg,
        persitSignin,
        isLoading: state.isLoading,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
