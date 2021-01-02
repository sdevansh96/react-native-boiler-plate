import {OFFILE, ONLINE} from './actionType';

const initailState = {
  status: true,
  details: {},
};
const netInfoReducer = (state = initailState, action) => {
  switch (action.type) {
    case OFFILE:
      return {...state, status: false};
    case ONLINE:
      return {...state, status: true, details: action.payload};
    default:
      return state;
  }
};

export default netInfoReducer;
