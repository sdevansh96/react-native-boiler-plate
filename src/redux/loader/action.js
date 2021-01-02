import { START_LOADING, END_LOADING } from "./actionType";

export const startLoading = (payload) => ({
  type: START_LOADING,
  payload,
});

export const stopLoading = () => ({
  type: END_LOADING,
});
