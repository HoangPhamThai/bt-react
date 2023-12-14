import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: [],
  updatingStudent: null,
  allListStudent: [],
  searchContent: "",
};

const handleStudentSearch = (listStudent, searchContent) => {
  let result = [...listStudent];
  if (searchContent !== "") {
    result = result.filter((student) => {
      return student.tenSV.includes(searchContent);
    });
  }
  return result;
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.allListStudent.push(action.payload);
      state.listStudent = handleStudentSearch(
        state.allListStudent,
        state.searchContent
      );
    },
    deleteStudent: (state, action) => {
      state.allListStudent = state.allListStudent.filter((student) => {
        return student.maSV !== action.payload.maSV;
      });
      state.listStudent = handleStudentSearch(
        state.allListStudent,
        state.searchContent
      );
    },
    onUpdatingStudent: (state, action) => {
      state.updatingStudent = action.payload;
    },
    updateStudent: (state, action) => {
      //
      state.updatingStudent = null;
      console.log(action.payload)

      let index = state.allListStudent.findIndex((value) => value.maSV === action.payload.maSV);
      if (index !== -1) {
        state.allListStudent[index] = { ...action.payload };
      }

      state.listStudent = handleStudentSearch(
        state.allListStudent,
        state.searchContent
      );
    },
    searchStudent: (state, action) => {
      state.searchContent = action.payload;
      state.listStudent = handleStudentSearch(
        state.allListStudent,
        state.searchContent
      );
    },
  },
});

export const {
  addStudent,
  updateStudent,
  searchStudent,
  deleteStudent,
  onUpdatingStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
