import { HIDE_WARNING, SHOW_WARNING } from "./actionType";
import { strings } from "../../utils/index";
const initialState = {
  status: false,
  text: strings.vpn,
};
const warningReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WARNING:
      return {
        ...state,
        status: true,
        text: action.payload ? action.payload : strings.vpn,
      };

    case HIDE_WARNING:
      return { ...state, status: false };

    default:
      return state;
  }
};

export default warningReducer;
