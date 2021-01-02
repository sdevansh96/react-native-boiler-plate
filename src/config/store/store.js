import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from '../../redux/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../redux/rootSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
