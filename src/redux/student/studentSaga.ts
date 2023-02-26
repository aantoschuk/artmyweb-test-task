import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, StrictEffect, debounce } from 'redux-saga/effects';

import { instance } from '@/api/api';

import { fetchFilteredStudents, loadStudents, loadedStudents, searchStudents } from './studentReducer';

/**
 * Accepts 'search: string' and 'page: number' as object to form query string
 * @param {Object} payload 
 * @returns arrays of students
 */
const makeRequest = async (payload: IFetchStudentsPayload) => {
  const { search, page } = payload;
  /**
   * We pass as payload offset/page and query param for searching
   */
  const response = await instance.get(`/students?q=${search}&_page=${page}&_limit=20`);
  return response.data;
};

export function* studentSaga() {
  // should be equal to deboucne technique 
  yield debounce(500, loadStudents.toString(), studentHelper);
}

export function* filteredStudentsSaga() {
  // should be equal to deboucne technique 
  yield debounce(500, searchStudents.toString(), studentHelper);
}

/**
 * not sure if it proper but seems works
 * Generator<call, retunrType, callResult>
 */
export function* studentHelper(action: PayloadAction<IFetchStudentsPayload>): Generator<StrictEffect, void, IStudent[]> {
  const response = yield call(makeRequest, action.payload);
  if (action.type == searchStudents.type) {
    yield put({ type: fetchFilteredStudents.type, payload: response });
  } else {
    yield put({ type: loadedStudents.type, payload: response });
  }
}