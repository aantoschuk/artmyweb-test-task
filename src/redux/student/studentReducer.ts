import { createSlice } from '@reduxjs/toolkit'

interface IStudentReducer {
  students: IStudent[];
  loading: boolean;
  error: string | undefined;
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
    loadStudents: (state) => {
      state.loading = true
    },
    loadedStudents: (state, payload) => {
      state.loading = false;
      state.students = [
        ...payload.payload
      ]
    }
  },
});

export const { loadStudents, loadedStudents } = studentReducer.actions;