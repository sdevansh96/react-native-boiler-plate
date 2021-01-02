import {APP_THEME, WHITE} from './actionType';
import {colors} from '../../utils/index';

const headerColorReducer = (state = colors.white, action) => {
  switch (action.type) {
    case APP_THEME:
      return (state = colors.black4c);
    case WHITE:
      return (state = colors.white);
    default:
      return state;
  }
};

export default headerColorReducer;
