import { createSlice } from '@reduxjs/toolkit'

interface IStudentReducer {
  students: IStudent[];
  loading: boolean;
  error: string | undefined;
}

interface IPayload {
  payload: IFetchStudentsPayload
}

const initialState: IStudentReducer = {
  students: [],
  loading: false,
  error: undefined
};

export const studentReducer = createSlice({
  name: 'studentReducer',
  initialState,
  reducers: {
    loadStudents: (state, _payload: IPayload) => {
      state.loading = true
    },
    loadedStudents: (state, payload) => {
      state.loading = false;
      state.students = [
        ...state.students,
        ...payload.payload
      ]
    }
  },
});

export const { loadStudents, loadedStudents } = studentReducer.actions;