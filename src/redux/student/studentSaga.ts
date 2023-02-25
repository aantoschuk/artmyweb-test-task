import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery, call, put, CallEffect, PutEffect, SagaReturnType, StrictEffect } from 'redux-saga/effects';

import { instance } from '@/api/api';

import { loadStudents, loadedStudents } from './studentReducer';
/**
 * 
 * @param { number } initialPostion: starting point 
 */
const makeRequest = async (initialPostion = 0) => {
  // how many students do we wont to fetch at one time
  const step = 20;
  // find range of students
  const currentPosition = initialPostion + step;
  // make a request to fake api
  const response = await instance.get("/students");
  return response.data.slice(initialPostion, currentPosition);
};

export function* studentSaga() {
  yield takeEvery(loadStudents.toString(), studentHelper);
}

/**
 * not sure if it proper but seems works
 * Generator<call, retunrType, callResult>
 */
export function* studentHelper(): Generator<StrictEffect, void, IStudent[]> {
  const response = yield call(makeRequest, 20);
  yield put({ type: loadedStudents.type, payload: response });
}