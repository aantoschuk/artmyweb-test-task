import createSagaMidleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from './rootSaga';

import { studentReducer } from "./student/studentReducer";

const sagaMiddleware = createSagaMidleware();

export const store = configureStore({
  reducer: {
    [studentReducer.name]: studentReducer.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;