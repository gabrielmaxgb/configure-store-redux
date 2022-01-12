import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "../reducers/bookReducer";
import bookReducer from "../slices/bookSlice";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    counter: counterReducer,
  }
})