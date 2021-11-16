import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_DETAILS,
    NO_ADMIN,
    CLEAR_ERRORS,
    CLEAR_MESSAGES,
  } from "../constants/adminConstants";
  
  export const adminReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
      case ADMIN_REGISTER_REQUEST:
        return { ...state, loading: true };
  
      case ADMIN_LOGIN_SUCCESS:
      case ADMIN_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          admin: action.payload.admin,
          message: action.payload.message,
        };
  
      case ADMIN_LOGIN_FAIL:
      case ADMIN_REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          admin: null,
          error: action.payload,
        };
      case ADMIN_DETAILS:
        return {
          ...state,
          admin: action.payload,
        };
      case NO_ADMIN:
        return {
          ...state,
          admin: null,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      case CLEAR_MESSAGES:
        return {
          ...state,
          message: null,
        };
  
      default:
        return state;
    }
  };
  