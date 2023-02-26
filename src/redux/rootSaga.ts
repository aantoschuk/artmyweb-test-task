import { all } from 'redux-saga/effects';

import { studentSaga, filteredStudentsSaga } from './student/studentSaga';

export default function* rootSaga() {
  yield all([studentSaga(), filteredStudentsSaga()]);
}