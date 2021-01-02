import {put, takeLatest, all, call} from 'redux-saga/effects';
import {START_LOGIN} from './actionType';
import {login} from './action';

function* userSaga() {
  yield all([call(loginUserSaga)]);
}

function* loginUserSaga() {
  yield takeLatest(START_LOGIN, loginUserSagaHandler);
}

function* loginUserSagaHandler() {
  console.log('login callledddd');
  yield put(login({name: 'Devansh'}));
}

export default userSaga;
