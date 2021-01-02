import {LOGIN} from './actionType';

const initailState = {
  isUserLogin: false,
  userData: {},
};

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = {...state, isUserLogin: true, userData: action.payload});
    default:
      return state;
  }
};

export default userReducer;
