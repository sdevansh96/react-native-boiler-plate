import { HIDE_WARNING, SHOW_WARNING } from "./actionType";

export const showWarning = (payload) => ({
  type: SHOW_WARNING,
  payload,
});

export const hideWarning = () => ({
  type: HIDE_WARNING,
});
