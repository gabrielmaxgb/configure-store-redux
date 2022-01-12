import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice =  createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter(state, action) {
      state.counter += 1;
    },
    decrementCounter(state, action) {
      state.counter -= 1;
    },
  },
})

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
