import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import reducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;
