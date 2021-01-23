import {persistCombineReducers} from 'redux-persist';

/****************** Reducers
 ***
 */
import userReducer from './user/userReducer';
import netInfoReducer from './netInfo/netInfoReducer';
import loader from './loader/loaderReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alertReducer from './alertReducer/alertReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};
const rootReducer = persistCombineReducers(persistConfig, {
  userReducer,
  netInfoReducer,
  loader,
  alertReducer,
});

export default rootReducer;
