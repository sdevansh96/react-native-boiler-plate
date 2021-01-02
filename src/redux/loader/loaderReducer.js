import { START_LOADING, END_LOADING } from "./actionType";

const initialState = {
  status: false,
  text: "",
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return (state = {
        status: true,
        text: action.payload ? action.payload : "",
      });

    case END_LOADING:
      return (state = { ...state, status: false });

    default:
      return state;
  }
};

export default loaderReducer;
