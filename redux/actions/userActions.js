import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../constants/userConstants";
import { CLIENT_DETAILS, NO_CLIENT } from "../constants/clientConstants";

// Load User
export const loadUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER_REQUEST });
  const config = {
    method: "GET",
    headers: { Authorization: window.localStorage.getItem("token") },
  };
  await fetch(`/api/v1/common/loadUser`, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        if (data.user.type === "client")
          dispatch({
            type: CLIENT_DETAILS,
            payload: data.user,
          });
        dispatch({
          type: LOAD_USER_SUCCESS,
        });
      } else {
        window.localStorage.removeItem("token");
        dispatch({ type: LOAD_USER_FAIL });
      }
    })
    .catch((err) => {
      dispatch({ type: LOAD_USER_FAIL });
    });
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  const config = {
    method: "GET",
    headers: { Authorization: window.localStorage.getItem("token") },
  };
  await fetch(`/api/v1/common/logout`, config)
    .then((response) => response.json())
    .then((data) => {
      window.localStorage.removeItem("token");
      dispatch({
        type: LOGOUT_SUCCESS,
      });
      if (data.type === "client")
        dispatch({
          type: NO_CLIENT,
        });
    });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearMessages = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGES });
};
