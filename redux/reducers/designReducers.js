import {
  SHOW_MAIN_DRAWER,
  HIDE_MAIN_DRAWER,
  SHOW_NOTIF,
  HIDE_NOTIF,
} from "../constants/designConstants";

export const designReducer = (
  state = { mainDrawer: false, notifbg: "", notifmsg: "" },
  action
) => {
  switch (action.type) {
    case SHOW_MAIN_DRAWER:
      return { mainDrawer: true };
    case HIDE_MAIN_DRAWER:
      return { mainDrawer: false };
    case SHOW_NOTIF:
      return {
        notif: true,
        notifbg: action.payload.bg,
        notifmsg: action.payload.msg,
      };
    case HIDE_NOTIF:
      return { ...state, notif: false };
    default:
      return state;
  }
};
