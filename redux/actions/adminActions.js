import cookie from "react-cookies";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_NEW_SERVICE_REQUEST,
  ADMIN_NEW_SERVICE_SUCCESS,
  ADMIN_NEW_SERVICE_FAIL,
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
} from "../constants/adminConstants";
import { LOAD_USER_SUCCESS } from "../constants/userConstants";
const token = cookie.load("token");
import { uploadSingleImage } from "../../utils/cloudinary";

export const signup = (name, email, phone, password) => async (dispatch) => {
  dispatch({ type: ADMIN_REGISTER_REQUEST });
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, password }),
  };

  await fetch(`/api/v1/admin/signup`, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: LOAD_USER_SUCCESS,
        });
        dispatch({
          type: ADMIN_REGISTER_SUCCESS,
          payload: { admin: data.user, message: "Registered Successfully." },
        });
        cookie.save("token", data.token, { path: "/" });
      } else
        dispatch({
          type: ADMIN_REGISTER_FAIL,
          payload: data.message,
        });
    })
    .catch((err) => {
      dispatch({
        type: ADMIN_REGISTER_FAIL,
        payload: "Please Try Again.",
      });
    });
};

export const login = (ID, password) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID, password }),
  };

  await fetch(`/api/v1/admin/login`, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: LOAD_USER_SUCCESS,
        });
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: { admin: data.user, message: "Logged In." },
        });
        cookie.save("token", data.token, { path: "/" });
      } else
        dispatch({
          type: ADMIN_LOGIN_FAIL,
          payload: data.message,
        });
    })
    .catch((err) => {
      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload: "Please Try Again.",
      });
    });
};

export const newService = (name, image) => async (dispatch) => {
  dispatch({ type: ADMIN_NEW_SERVICE_REQUEST });
  /*const cloudResponse = await imageUpload(image, "services");
  const { url, public_id } = cloudResponse;*/
  const url = "/",
    public_id = "/";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ name, url, public_id }),
  };

  await fetch(`/api/v1/admin/service`, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: ADMIN_NEW_SERVICE_SUCCESS,
          payload: "Added Successfully.",
        });
      } else
        dispatch({
          type: ADMIN_NEW_SERVICE_FAIL,
          payload: data.message,
        });
    })
    .catch((err) => {
      dispatch({
        type: ADMIN_NEW_SERVICE_FAIL,
        payload: "Please Try Again.",
      });
    });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearMessages = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGES });
};
