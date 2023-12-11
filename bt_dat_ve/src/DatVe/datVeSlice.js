import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSelectedSeat: [],
};

const datVeSlice = createSlice({
  name: "datVeSlice",
  initialState,
  reducers: {
    chooseSeat: (state, action) => {
      let cloneListSeat = [...state.listSelectedSeat];
      let index = cloneListSeat.findIndex((item) => item === action.payload);

      if (index === -1) {
        cloneListSeat.push(action.payload);
      } else {
        cloneListSeat = cloneListSeat.filter((item) => item !== action.payload);
      }
      state.listSelectedSeat = [...cloneListSeat];
    },
  },
});

export const { chooseSeat } = datVeSlice.actions;

export default datVeSlice.reducer;
